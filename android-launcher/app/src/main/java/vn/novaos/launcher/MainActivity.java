package vn.novaos.launcher;

import android.app.Activity;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.content.pm.ResolveInfo;
import android.os.Build;
import android.os.Bundle;
import android.provider.MediaStore;
import android.provider.Settings;
import android.view.Display;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.List;

/**
 * NovaOS 16 Hybrid Lite — GPU-Accelerated System Home Launcher Activity
 * Runs at 60/90/120FPS on Qualcomm Adreno GPU & bridges directly to Android OS
 */
public class MainActivity extends Activity {

    private WebView osSurfaceView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        requestWindowFeature(Window.FEATURE_NO_TITLE);
        enableHighRefreshRate();
        enableImmersiveFullscreen();

        osSurfaceView = new WebView(this);
        // Ép toàn bộ giao diện vẽ trực tiếp trên nhân đồ họa Adreno GPU (60/90FPS)
        osSurfaceView.setLayerType(View.LAYER_TYPE_HARDWARE, null);
        osSurfaceView.setBackgroundColor(0xFF05070F);
        osSurfaceView.setVerticalScrollBarEnabled(false);
        osSurfaceView.setHorizontalScrollBarEnabled(false);

        WebSettings settings = osSurfaceView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setDatabaseEnabled(true);
        settings.setAllowFileAccess(true);
        settings.setCacheMode(WebSettings.LOAD_DEFAULT);
        settings.setRenderPriority(WebSettings.RenderPriority.HIGH);

        osSurfaceView.setWebViewClient(new WebViewClient());
        osSurfaceView.setWebChromeClient(new WebChromeClient());
        osSurfaceView.addJavascriptInterface(new NovaAndroidBridge(), "NovaNative");

        setContentView(osSurfaceView);
        osSurfaceView.loadUrl("file:///android_asset/index.html");
    }

    /**
     * Mở khóa tốc độ làm tươi màn hình cao nhất (60Hz / 90Hz / 120Hz)
     */
    private void enableHighRefreshRate() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            Display display = getWindowManager().getDefaultDisplay();
            Display.Mode[] modes = display.getSupportedModes();
            Display.Mode bestMode = null;
            float maxHz = 60f;
            for (Display.Mode m : modes) {
                if (m.getRefreshRate() >= maxHz) {
                    maxHz = m.getRefreshRate();
                    bestMode = m;
                }
            }
            if (bestMode != null) {
                WindowManager.LayoutParams params = getWindow().getAttributes();
                params.preferredDisplayModeId = bestMode.getModeId();
                getWindow().setAttributes(params);
            }
        }
    }

    /**
     * Chế độ tràn viền toàn màn hình (Edge-to-Edge Immersive)
     */
    private void enableImmersiveFullscreen() {
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        View decorView = getWindow().getDecorView();
        decorView.setSystemUiVisibility(
                View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_FULLSCREEN
                | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
        );
    }

    @Override
    protected void onResume() {
        super.onResume();
        enableImmersiveFullscreen();
    }

    @Override
    public void onBackPressed() {
        // Là Màn hình chính của Hệ điều hành nên bấm nút Back sẽ đóng cửa sổ con thay vì thoát OS
        if (osSurfaceView != null) {
            osSurfaceView.evaluateJavascript("if(window.NovaOS) NovaOS.closeApp();", null);
        }
    }

    /**
     * Cầu nối Java <-> Giao diện NovaOS:
     * Mở ứng dụng thật (Zalo, MB Bank, VNeID, Liên Quân...) & Bật bảng điều khiển 4G/Wi-Fi thật
     */
    public class NovaAndroidBridge {

        @JavascriptInterface
        public boolean launchApp(String target) {
            try {
                Intent intent = null;
                if ("dialer".equals(target)) {
                    intent = new Intent(Intent.ACTION_DIAL);
                } else if ("camera".equals(target)) {
                    intent = new Intent(MediaStore.INTENT_ACTION_STILL_IMAGE_CAMERA);
                } else if ("settings".equals(target)) {
                    intent = new Intent(Settings.ACTION_SETTINGS);
                } else {
                    PackageManager pm = getPackageManager();
                    intent = pm.getLaunchIntentForPackage(target);
                }
                if (intent != null) {
                    intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                    startActivity(intent);
                    return true;
                }
            } catch (Exception ignored) {
            }
            return false;
        }

        @JavascriptInterface
        public void openSystemSetting(String type) {
            try {
                Intent intent;
                if ("wifi".equals(type)) {
                    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                        intent = new Intent(Settings.Panel.ACTION_WIFI);
                    } else {
                        intent = new Intent(Settings.ACTION_WIFI_SETTINGS);
                    }
                } else if ("4g".equals(type)) {
                    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                        intent = new Intent(Settings.Panel.ACTION_INTERNET_CONNECTIVITY);
                    } else {
                        intent = new Intent(Settings.ACTION_DATA_ROAMING_SETTINGS);
                    }
                } else {
                    intent = new Intent(Settings.ACTION_SETTINGS);
                }
                intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                startActivity(intent);
            } catch (Exception ignored) {
            }
        }

        @JavascriptInterface
        public String getInstalledAppsJson() {
            JSONArray arr = new JSONArray();
            try {
                PackageManager pm = getPackageManager();
                Intent mainIntent = new Intent(Intent.ACTION_MAIN, null);
                mainIntent.addCategory(Intent.CATEGORY_LAUNCHER);
                List<ResolveInfo> apps = pm.queryIntentActivities(mainIntent, 0);
                for (ResolveInfo info : apps) {
                    String pkg = info.activityInfo.packageName;
                    if (getPackageName().equals(pkg)) continue;
                    JSONObject obj = new JSONObject();
                    obj.put("label", info.loadLabel(pm).toString());
                    obj.put("pkg", pkg);
                    arr.put(obj);
                }
            } catch (Exception ignored) {
            }
            return arr.toString();
        }

        @JavascriptInterface
        public void requestGarbageCollect() {
            System.gc();
        }
    }
}
