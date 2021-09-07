# 개모임: 개발자들의 모임
항해99 2기 미니 프로젝트<br>
소모임, 스터디를 시작하고 싶은 개발자, 참여하고 싶은 개발자,<br>
개발자들을 위한 모임의 장, 개모임입니다.<br>

# 개모임 (Front-end)


![dev-moim_main](https://github.com/leedmeen/leedmeen/blob/main/dev-moim/01_main.gif?raw=true)


## 📌 개요 
- 이름: 개모임(개발자들의 모임)
- 기간: 2021.07.09. ~ 2021.07.15.
- 팀원
  - Front-end(React): 이동민, 원동환
  - Back-end(Node.js): 정창길, 송하영, 방민수
- [Back-end(Node.js) 깃허브](https://github.com/ombreman/miniproject_team18_backend)
- [프로젝트 기획 노션](https://www.notion.so/_-18-9c03f77e5aed4e46a2dc8112e7b6c0fb)


## 📚 사용한 라이브러리
- react-router-dom v5.2.0, connected-react-router v6.8.0, history v4.10.1
- redux v4.1.0, react-redux v7.2.4, redux-thunk v2.3.0, redux-logger v3.0.6, redux-actions v2.6.5, immer v9.0.5
- axios v0.21.1
- styled-components v5.3.0
- universal-cookie v4.0.4
- material-ui v4.12.1
- moment v2.29.1


## ✨ 주요 기능
#### 1. 로그인
- 아이디와 비밀번호를 입력하는 일반 로그인 방식을 사용합니다.
- JWT 토큰을 발행, 사용합니다.
- 로그인을 하지 않으면 다른 기능을 이용할 수 없습니다.

![dev-moim_login](https://github.com/leedmeen/leedmeen/blob/main/dev-moim/02_log_in.gif?raw=true)

#### 2. 모임 모집 글 CRUD
- 제목, 주제, 내용, 모집 인원을 정하고 등록할 수 있습니다.
- 본인이 작성한 글은 수정 또는 삭제할 수 있습니다.
- 다른 사람이 남긴 글을 조회할 수 있습니다.

![dev-moim_post](https://github.com/leedmeen/leedmeen/blob/main/dev-moim/03_post.gif?raw=true)

#### 3. 참여 신청 및 취소
- 다른 사람의 모집 글에 참여 신청을 할 수 있습니다.
- 참여 신청한 후에는 신청 취소를 할 수 있습니다.
- 본인이 작성한 글에는 이미 참여자로 등록되어 있습니다.

![dev-moim_party](https://github.com/leedmeen/leedmeen/blob/main/dev-moim/04_party.gif?raw=true)

#### 4. 댓글 CRUD
- 모집 글에 댓글을 남길 수 있습니다.
- 본인이 작성한 댓글은 수정 또는 삭제할 수 있습니다.

![dev-moim_comment](https://github.com/leedmeen/leedmeen/blob/main/dev-moim/05_comment.gif?raw=true)


<!-- ## 🔨 주요 개선 사항
- 커뮤니티 특성상 모바일로 접속하는 사용자들의 편의성을 위해 데스크탑-태블릿-모바일로 이어지는 반응형 웹으로 제작했습니다.
- AWS Certificate Manager를 통해 SSL 인증서를 발급한 후 https를 적용하여 배포했습니다.
- 오류 수정 및 재배포가 잦은 기간에는, S3 버킷의 수정사항을 즉각 반영하기 위해 AWS CloudFront의 캐싱 기간을 0~30초로 낮추고, Github Actions를 통해 배포 자동화를 적용했습니다.
- 💥모든 로딩이 끝나지 않았음에도 로딩 스피너가 멈추는 현상 확인
  - 로딩이 1회 발생할 때마다 task를 1씩 증가시키면서 로딩이 1회 끝날 때마다 task를 1씩 감소시켰고,
  - task가 1 이상이 되면 is_loading: true, task가 0이 되면 is_loading: false로 전환하여,
  - 모든 리덕스 모듈의 데이터 로딩이 끝난 후에 로딩 스피너를 멈출 수 있었습니다.
- 💥사용자가 직접 브라우저 쿠키에 저장된 프로필 사진 정보에 접근하는 일 발생
  - 프로필 사진에는 사용자가 접근할 수 없도록 리덕스로 관리하고,
  - 사용자는 마이페이지에서 프로필 사진을 삭제할 수 있도록 했습니다. -->
