# Git 명령어 모음

## Git 초기화와 로컬 저장소

1. 원하는 로컬 저장소에서 Git 초기화를 하여 깃으로 버전 관리하기

```bash
git init
```

2. `.git` 이라는 숨김 폴더가 생성된다.

![Image](https://github.com/user-attachments/assets/d319ca1f-9c8e-4d02-ae18-5688fcf95bcc)

<br>

## Commit

1. 파일 추가

```bash
git add README.md
```

2. 커밋 생성

```bash
git commit -m "커밋 메세지"
```

![Image](https://github.com/user-attachments/assets/f7351f1f-8426-4184-a434-e359aeb76625)

<br>

## Push

1. main 브랜치에 푸쉬한다.

```bash
git push origin main
```

<br>

## Pull

```bash
git pull origin main
```