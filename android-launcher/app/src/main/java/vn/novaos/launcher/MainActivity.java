package vn.novaos.launcher;

import android.app.Activity;
import android.app.ActivityManager;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.content.pm.ResolveInfo;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.Drawable;
import android.hardware.camera2.CameraManager;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.os.StatFs;
import android.os.VibrationEffect;
import android.os.Vibrator;
import android.provider.AlarmClock;
import android.provider.MediaStore;
import android.provider.Settings;
import android.util.Base64;
import android.view.Display;
import android.view.HapticFeedbackConstants;
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

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class MainActivity extends Activity {

    private WebView osSurfaceView;
    private boolean torchEnabled = false;
    private String cachedAppsJson = null;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        requestWindowFeature(Window.FEATURE_NO_TITLE);
        enableHighRefreshRate();
        enableImmersiveFullscreen();

        osSurfaceView = new WebView(this);
        osSurfaceView.setLayerType(View.LAYER_TYPE_HARDWARE, null);
        osSurfaceView.setBackgroundColor(0xFF000000);
        osSurfaceView.setVerticalScrollBarEnabled(false);
        osSurfaceView.setHorizontalScrollBarEnabled(false);
        osSurfaceView.setOverScrollMode(View.OVER_SCROLL_NEVER);

        WebSettings settings = osSurfaceView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setDatabaseEnabled(true);
        settings.setAllowFileAccess(true);
        settings.setAllowContentAccess(true);
        settings.setMediaPlaybackRequiresUserGesture(false);
        settings.setCacheMode(WebSettings.LOAD_DEFAULT);
        settings.setRenderPriority(WebSettings.RenderPriority.HIGH);
        settings.setTextZoom(100);

        osSurfaceView.setWebViewClient(new WebViewClient());
        osSurfaceView.setWebChromeClient(new WebChromeClient());
        osSurfaceView.addJavascriptInterface(new NovaAndroidBridge(), "NovaNative");

        setContentView(osSurfaceView);
        osSurfaceView.loadUrl("file:///android_asset/index.html");
    }

    private void enableHighRefreshRate() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            try {
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
            } catch (Exception ignored) {
            }
        }
    }

    private void enableImmersiveFullscreen() {
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
        if (osSurfaceView != null) {
            osSurfaceView.evaluateJavascript("if(window.OS) window.OS.handleHardwareBack();", null);
        }
    }

    private String drawableToBase64(Drawable drawable) {
        try {
            Bitmap bitmap;
            if (drawable instanceof BitmapDrawable) {
                bitmap = ((BitmapDrawable) drawable).getBitmap();
            } else {
                int w = Math.max(drawable.getIntrinsicWidth(), 96);
                int h = Math.max(drawable.getIntrinsicHeight(), 96);
                if (w > 128) w = 128;
                if (h > 128) h = 128;
                bitmap = Bitmap.createBitmap(w, h, Bitmap.Config.ARGB_8888);
                Canvas canvas = new Canvas(bitmap);
                drawable.setBounds(0, 0, canvas.getWidth(), canvas.getHeight());
                drawable.draw(canvas);
            }
            Bitmap scaled = Bitmap.createScaledBitmap(bitmap, 96, 96, true);
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            scaled.compress(Bitmap.CompressFormat.PNG, 85, baos);
            return "data:image/png;base64," + Base64.encodeToString(baos.toByteArray(), Base64.NO_WRAP);
        } catch (Exception e) {
            return "";
        }
    }

    public class NovaAndroidBridge {

        @JavascriptInterface
        public void haptic() {
            runOnUiThread(() -> {
                try {
                    osSurfaceView.performHapticFeedback(HapticFeedbackConstants.VIRTUAL_KEY);
                } catch (Exception e) {
                    try {
                        Vibrator v = (Vibrator) getSystemService(Context.VIBRATOR_SERVICE);
                        if (v != null) {
                            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                                v.vibrate(VibrationEffect.createOneShot(12, VibrationEffect.DEFAULT_AMPLITUDE));
                            } else {
                                v.vibrate(12);
                            }
                        }
                    } catch (Exception ignored) {}
                }
            });
        }

        @JavascriptInterface
        public boolean toggleTorch() {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                try {
                    CameraManager cm = (CameraManager) getSystemService(Context.CAMERA_SERVICE);
                    if (cm != null && cm.getCameraIdList().length > 0) {
                        torchEnabled = !torchEnabled;
                        cm.setTorchMode(cm.getCameraIdList()[0], torchEnabled);
                        return torchEnabled;
                    }
                } catch (Exception ignored) {
                }
            }
            torchEnabled = !torchEnabled;
            return torchEnabled;
        }

        @JavascriptInterface
        public String getHardwareStatusJson() {
            JSONObject obj = new JSONObject();
            try {
                ActivityManager am = (ActivityManager) getSystemService(Context.ACTIVITY_SERVICE);
                ActivityManager.MemoryInfo mi = new ActivityManager.MemoryInfo();
                if (am != null) am.getMemoryInfo(mi);

                double totalRamGb = mi.totalMem / (1024.0 * 1024.0 * 1024.0);
                double availRamGb = mi.availMem / (1024.0 * 1024.0 * 1024.0);
                double usedRamGb = Math.max(0.5, totalRamGb - availRamGb);

                File path = Environment.getDataDirectory();
                StatFs stat = new StatFs(path.getPath());
                double totalDiskGb = (stat.getBlockCountLong() * stat.getBlockSizeLong()) / (1024.0 * 1024.0 * 1024.0);
                double availDiskGb = (stat.getAvailableBlocksLong() * stat.getBlockSizeLong()) / (1024.0 * 1024.0 * 1024.0);
                double usedDiskGb = Math.max(1.0, totalDiskGb - availDiskGb);

                obj.put("model", Build.MODEL);
                obj.put("device", Build.DEVICE);
                obj.put("brand", Build.BRAND);
                obj.put("androidVer", Build.VERSION.RELEASE);
                obj.put("sdk", Build.VERSION.SDK_INT);
                obj.put("ramUsed", String.format("%.1f", usedRamGb));
                obj.put("ramTotal", String.format("%.1f", totalRamGb));
                obj.put("ramPct", (int) Math.round((usedRamGb / totalRamGb) * 100));
                obj.put("diskUsed", String.format("%.1f", usedDiskGb));
                obj.put("diskTotal", String.format("%.0f", totalDiskGb));
                obj.put("diskPct", (int) Math.round((usedDiskGb / totalDiskGb) * 100));
            } catch (Exception ignored) {
            }
            return obj.toString();
        }

        @JavascriptInterface
        public boolean launchApp(String target) {
            try {
                Intent intent = null;
                if ("dialer".equals(target)) {
                    intent = new Intent(Intent.ACTION_DIAL);
                } else if (target != null && target.startsWith("tel:")) {
                    intent = new Intent(Intent.ACTION_DIAL, Uri.parse(target));
                } else if ("sms".equals(target)) {
                    intent = new Intent(Intent.ACTION_MAIN);
                    intent.addCategory(Intent.CATEGORY_APP_MESSAGING);
                } else if ("camera".equals(target)) {
                    intent = new Intent(MediaStore.INTENT_ACTION_STILL_IMAGE_CAMERA);
                } else if ("gallery".equals(target)) {
                    intent = new Intent(Intent.ACTION_VIEW);
                    intent.setType("image/*");
                } else if ("clock".equals(target)) {
                    intent = new Intent(AlarmClock.ACTION_SHOW_ALARMS);
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
                } else if ("bluetooth".equals(type)) {
                    intent = new Intent(Settings.ACTION_BLUETOOTH_SETTINGS);
                } else if ("display".equals(type)) {
                    intent = new Intent(Settings.ACTION_DISPLAY_SETTINGS);
                } else if ("sound".equals(type)) {
                    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                        intent = new Intent(Settings.Panel.ACTION_VOLUME);
                    } else {
                        intent = new Intent(Settings.ACTION_SOUND_SETTINGS);
                    }
                } else if ("home".equals(type)) {
                    intent = new Intent(Settings.ACTION_HOME_SETTINGS);
                } else {
                    intent = new Intent(Settings.ACTION_SETTINGS);
                }
                intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                startActivity(intent);
            } catch (Exception ignored) {
            }
        }

        @JavascriptInterface
        public String getInstalledAppsJson(boolean forceRefresh) {
            if (cachedAppsJson != null && !forceRefresh) {
                return cachedAppsJson;
            }
            JSONArray arr = new JSONArray();
            try {
                PackageManager pm = getPackageManager();
                Intent mainIntent = new Intent(Intent.ACTION_MAIN, null);
                mainIntent.addCategory(Intent.CATEGORY_LAUNCHER);
                List<ResolveInfo> apps = pm.queryIntentActivities(mainIntent, 0);
                Collections.sort(apps, new Comparator<ResolveInfo>() {
                    @Override
                    public int compare(ResolveInfo a, ResolveInfo b) {
                        return a.loadLabel(pm).toString().compareToIgnoreCase(b.loadLabel(pm).toString());
                    }
                });
                for (ResolveInfo info : apps) {
                    String pkg = info.activityInfo.packageName;
                    if (getPackageName().equals(pkg)) continue;
                    JSONObject obj = new JSONObject();
                    obj.put("label", info.loadLabel(pm).toString());
                    obj.put("pkg", pkg);
                    obj.put("icon", drawableToBase64(info.loadIcon(pm)));
                    arr.put(obj);
                }
                cachedAppsJson = arr.toString();
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
