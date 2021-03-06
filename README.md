# bet-store Ứng dụng mua bán rao vặt

Ứng dụng là nơi kết nối các bạn sinh viên có nhu cầu mua bán, trao đổi hàng hóa như quần áo, đồ ăn, ...

<b>Link chplay tải ứng dụng: https://play.google.com/store/apps/details?id=com.ktm.betstore</b>

## Nội dung
1. [Chức năng](#chức-năng)
    
    1. [Đăng nhập / Đăng kí](#đăng-nhập-/-đăng-kí)
    
    1. [Tìm kiếm sản phẩm](#tìm-kiếm-sản-phẩm)
    
    1. [Sắp xếp sản phẩm](#sắp-xếp-sản-phẩm)
    
    1. [Xem thông tin sản phẩm](#xem-thông-tin-sản-phẩm)
    
    1. [Xem danh sách danh mục](#xem-danh-sách-danh-mục)
    
    1. [Liên lạc với người bán](#liên-lạc-với-người-bán)
    
    1. [Nạp tiền](#nạp-tiền)
    
    1. [Quản lý sản phẩm rao bán](#quản-lý-sản-phẩm-rao-bán)
    
    1. [Quản lý thông tin cá nhân](#quản-lý-thông-tin-cá-nhân)
    
    1. [Quản lý các danh mục](#quản-lý-các-danh-mục)
    
1. [Yêu cầu thiết bị](#yêu-cầu-thiết-bị)

1. [Thư viện và công nghệ](#thư-viện-và-công-nghệ)

1. [Tác giả](#tác-giả)

1. [Giấy phép](#giấy-phép)

## Chức năng
### Đăng nhập / Đăng kí
   * Đăng nhập
 
   * Đăng kí: Sử dụng số điện thoại để xác nhận tài khoản
   
   <p align="center">
   <img src="doc/Screenshot_1611636664.png" height = "480">
   <img src="doc/Screenshot_1611636667.png" height = "480"> 
   <img src="doc/Screenshot_1611636764.png" height = "480">
   </p>
   
### Tìm kiếm sản phẩm
   * Tìm kiếm theo tên
   
   <p align="center">
   <img src="doc/142720100_442125336974651_1138010525790594625_n.jpg" height = "480">
   </p>

### Sắp xếp sản phẩm

   

### Xem thông tin sản phẩm
   * Xem thông tin chi tiết của sản phẩm
   * Liên lạc người bán nếu muốn
   
   <p align="center">
   <img src="doc/142850290_119039046758283_7226204008015115058_n.jpg" height = "480">
   <img src="doc/142800826_441757826959729_2163640143447877705_n.jpg" height = "480"> 
   </p>

### Xem danh sách danh mục
   * Danh sách các danh mục mua bán
   
   <p align="center">
   <img src="doc/Screenshot_1611636628.png" height = "480">
   </p>

### Liên lạc với người bán
   * Liên hệ với người bán để trao đổi thông tin và mua hàng
   
   <p align="center">
   <img src="doc/Screenshot_1611636785.png" height = "480">
   <img src="doc/Screenshot_1611636817.png" height = "480">
   </p>
   
### Nạp tiền
   * Nạp tiền qua momo: Sử dụng hệ thống xác thực giao dịch để tự động cộng tiền khi khách chuyển tiền đúng cú pháp của momo(Đã sử dụng được)
   
   <p align="center">
   <img src="doc/Screenshot_1611636755.png" height = "480">
   <img src="doc/Screenshot_1611636751.png" height = "480">
   </p>

### Quản lý sản phẩm rao bán
   * Thêm sản phẩm mới
   
   * Sửa thông tin sản phẩm
   
   * Xóa sản phẩm
   
   <p align="center">
   <img src="doc/Screenshot_1611636710.png" height = "480">
   <img src="doc/Screenshot_1611636714.png" height = "480">
   <img src="doc/Screenshot_1611636704.png" height = "480">
   <img src="doc/Screenshot_1611636728.png" height = "480">
   <img src="doc/Screenshot_1611636734.png" height = "480">
   </p>

### Quản lý thông tin cá nhân
   * Cập nhật thông tin
   
   * Đổi mật khẩu
   
   <p align="center">
   <img src="doc/Screenshot_1611636679.png" height = "480">
   <img src="doc/Screenshot_1611636685.png" height = "480">
   <img src="doc/Screenshot_1611636692.png" height = "480">
   <img src="doc/Screenshot_1611636696.png" height = "480">
   <img src="doc/Screenshot_1611636737.png" height = "480">
   </p>

### Quản lý các danh mục
   * Các thuộc tính riêng biệt cho từng loại danh mục (vd: xe thì sẽ có hãng xe, nhà sẽ có diện tích, ...)
   
   <p align="center">
   <img src="doc/Screenshot_1611636734.png" height = "480">
   </p>

## Yêu cầu thiết bị

- Android:

   + Android studio : 3.0.1

   + Gradle : 4.1

   + Min sdk : 19

   + Target sdk : 26
- iOS:

   + iOS: 10

## Thư viện và công nghệ

- Language : Java, Golang, Javascript, Typescript, 

- FrameWork : 
    - Frontend: React native
    - Backend: SpringbootJava, Nodejs Express, Go gin

- Database: MongoDB

## Thiết kế hệ thống
   
   <p align="center">
   <img src="doc/142075450_336896110780779_5764666094310486041_n.png">
   </p>
    
- Backend : 
    - Sử dụng CDNServer(tự build): để làm nơi lưu trữ file và hình ảnh
    - Sử dụng Docker-compose để hợp nhất các microservice và database tạo nên hệ thống backend
    - Sư dụng Nginx để làm webserver cho ứng dụng

## Danh sách nhóm xây dựng mobile
 - Đoàn Công Minh - 18521092@gm.uit.edu.vn
 - Nguyễn Thị Lan Phương - 16520972@gm.uit.edu.vn
 

## Danh sách nhóm xây dựng web
 - Đoàn Công Minh - 18521092@gm.uit.edu.vn
 - Trần Minh Khôi - 18520947@gm.uit.edu.vn
 - Bùi Minh Tiến - 18521481@gm.uit.edu.vn

## Giấy phép

    Copyright (C) 2002-2020 Igor Sysoev
    Copyright (C) 2011-2020 Nginx, Inc.
    All rights reserved.

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions
    are met:
    1. Redistributions of source code must retain the above copyright
     notice, this list of conditions and the following disclaimer.
    2. Redistributions in binary form must reproduce the above copyright
     notice, this list of conditions and the following disclaimer in the
     documentation and/or other materials provided with the distribution.

    THIS SOFTWARE IS PROVIDED BY THE AUTHOR AND CONTRIBUTORS ``AS IS'' AND
    ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
    ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE
    FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
    DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
    OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
    HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
    LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
    OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
    SUCH DAMAGE.
 
   
