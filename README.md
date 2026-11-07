<div align="center">

# 📲 NovaOS 16 Hybrid Lite — Hệ Thống Đóng Gói ROM & DSU Dual-Boot Cho Xiaomi 8 Series

<p align="center">
  <img src="https://img.shields.io/badge/Android_16-Hybrid_Lite_GSI-3DDC84?style=for-the-badge&logo=android&logoColor=white" alt="Android 16" />
  <img src="https://img.shields.io/badge/DSU_Dual--Boot-0%25_Anti--Brick-0EA5E9?style=for-the-badge" alt="DSU SafeTest" />
  <img src="https://img.shields.io/badge/Xiaomi_8-dipper_·_ginkgo_·_olive-FF6900?style=for-the-badge&logo=xiaomi&logoColor=white" alt="Xiaomi 8" />
  <a href="./LICENSE"><img src="https://img.shields.io/badge/License-MIT-F59E0B?style=for-the-badge" alt="MIT License" /></a>
</p>

Dự án **Nồi Cook ROM Hệ Điều Hành (system.img & FullROM.zip)** tự động hóa 100% trên đám mây **GitHub Actions** dành cho dòng **Xiaomi 8** (dipper - Mi 8, ginkgo - Redmi Note 8, olive - Redmi 8), tích hợp cơ chế **Chạy Thử Hệ Điều Hành Song Song (DSU Dual-Boot)** giúp kiểm thử ROM trực tiếp trên thiết bị với **0% rủi ro hỏng máy (Anti-Brick)**.

</div>

---

## 🛡️ 1. Tại Sao Test Bản ROM Này Không Bao Giờ Làm Hư Điện Thoại?

Thay vì xóa ngay phân vùng /system gốc của máy (dễ gây treo logo nếu chưa quen), dự án xuất ra 2 định dạng **ROM Hệ Điều Hành (system.img)**:

1. **NovaOS_A16_<mã_máy>_SafeTest_DSU.zip (Khuyên dùng để Test trước)**:
   - Sử dụng công nghệ **DSU (Dynamic System Updates)** chính chủ của Android: Nạp thẳng file hệ điều hành system.img mới vào một phân vùng tạm thời trên bộ nhớ trống.
   - Điện thoại sẽ **khởi động thẳng vào Hệ Điều Hành NovaOS 16 mới hoàn toàn**.
   - **An toàn 100%:** Hệ điều hành gốc của máy **không hề bị xóa hay ghi đè**. Bất cứ lúc nào muốn quay về máy cũ, chỉ cần **bấm nút Nguồn khởi động lại (Reboot)** là máy tự động quay về ROM gốc nguyên vẹn 100%!
2. **NovaOS_A16_<mã_máy>_FullROM.zip (Bản Nạp Cố Định qua TWRP / Fastboot)**:
   - Chỉ dùng sau khi đã chạy thử ở bước 1 thấy ưng ý và muốn thay thế hẳn ROM cũ.
   - Trong file [updater-script](rom-tree/META-INF/com/google/android/updater-script) đã có chốt chặn kiểm tra đúng tên mã phần cứng (dipper / ginkgo / olive), nếu khác mã máy sẽ tự động dừng ngay để chống nạp nhầm làm brick máy.

---

## 📂 2. Cấu Trúc Thư Mục Dự Án (Chỉ ~1 MB Trên Ổ Cứng Máy Tính)

- [om-tree/system/vendor_vn.prop](rom-tree/system/vendor_vn.prop): Cấu hình lõi Hệ điều hành (Mặc định Tiếng Việt, bật sóng **4G+ VoLTE**, chống ngủ đông **Zalo/Messenger**, tối ưu hệ thống và mở khóa **90FPS**).
- [om-tree/system/etc/init/init.novaos.rc](rom-tree/system/etc/init/init.novaos.rc): Kịch bản nhân Kernel chạy ngay khi bật nguồn (tối ưu ZRAM, đặt DNS 1.1.1.1).
- [om-tree/debloat-list.txt](rom-tree/debloat-list.txt): Danh sách dọn sạch các gói ứng dụng thừa khỏi system.img.
- [om-tree/META-INF/com/google/android/updater-script](rom-tree/META-INF/com/google/android/updater-script): Kịch bản nạp phân vùng cho TWRP Recovery có khóa bảo vệ mã máy.
- [scripts/cook_system_img.sh](scripts/cook_system_img.sh): Kịch bản Linux tự động mở system.img, tinh chỉnh cấu hình và đóng gói ROM trên đám mây.
- [.github/workflows/build-rom.yml](.github/workflows/build-rom.yml): Kịch bản điều khiển máy chủ **GitHub Actions** biên dịch tự động trên đám mây.
- [	ools/Test_Va_Nap_ROM_Xiaomi8.bat](tools/Test_Va_Nap_ROM_Xiaomi8.bat): Công cụ Tiếng Việt trên Windows hỗ trợ kiểm tra cáp và nạp chạy thử qua chế độ an toàn **DSU**.

---

## 📄 Giấy phép & Tuyên bố Pháp lý (License & Legal Disclaimer)

- **Giấy phép Mã nguồn mở**: Toàn bộ kịch bản tự động hóa và cấu hình trong kho lưu trữ này được phát hành theo giấy phép **[MIT License](./LICENSE)** — Bản quyền © 2026 **Bùi Đức Huy (@buiduchuy2010qn-prog)**, phục vụ mục đích học tập và nghiên cứu hệ điều hành dựa trên mã nguồn mở **Android Open Source Project (AOSP)**.
- **Nhãn hiệu & Miễn trừ trách nhiệm**: **Android** là nhãn hiệu của **Google LLC**; **Xiaomi / Redmi** là nhãn hiệu của **Xiaomi Corporation**. Dự án hoạt động độc lập, không liên kết hay được phê duyệt bởi Google hoặc Xiaomi. Người dùng tự chịu mọi trách nhiệm khi can thiệp hệ thống hoặc nạp phân vùng trên thiết bị cá nhân.