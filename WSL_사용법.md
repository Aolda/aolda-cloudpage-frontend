# WSL에서 사용하는 방법

## 1. WSL에 Python 설치

WSL 터미널에서 다음 명령어 실행:

```bash
# 설치 스크립트 실행 (권장)
bash install_wsl.sh

# 또는 수동 설치
sudo apt update
sudo apt install python3 python3-pip -y
pip3 install pandas openpyxl paramiko
```

## 2. 스크립트 실행

### 방법 1: WSL에서 직접 실행
```bash
# 현재 디렉토리에서
python3 change_passwords.py

# Windows 경로에서 실행 (경로 자동 변환됨)
python3 /mnt/c/Users/admin/김경은_공부/AOLDA/AHP/aolda-homepage-v2/change_passwords.py
```

### 방법 2: Windows 경로 입력 시
엑셀 파일 경로를 입력할 때:
- Windows 경로: `C:\Users\admin\서버목록.xlsx` 
- 자동으로 `/mnt/c/Users/admin/서버목록.xlsx`로 변환됩니다

## 3. 엑셀 파일 경로 예시

- Windows 경로: `C:\Users\admin\서버목록.xlsx`
- WSL 경로: `/mnt/c/Users/admin/서버목록.xlsx`
- 상대 경로: `./서버목록.xlsx` (현재 디렉토리에 있는 경우)

## 참고사항

- 스크립트는 Windows와 WSL 모두에서 자동으로 경로를 변환합니다
- WSL에서는 `python3` 명령어를 사용하세요
- Windows에서는 `python` 명령어를 사용하세요


