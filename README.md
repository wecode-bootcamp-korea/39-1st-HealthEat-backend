# [TEAM_HealthEat] WECODE 39기 1차 프로젝트

## 프로젝트 소개

- 제목 : 건강식품 판매 사이트 pilly를 모델링 한 프로젝트

- 선정이유
  - 건강기능식품을 처음 접하고, 구매하고자하는 유저에게 친숙하게 다가가보자는 의견을 배경으로 제작하게 되었습니다.
  - FE 측면 : 반응형 사이트, 케럿셀, 상품 내부 옵션별 이미지 삽입, 쿼리파라미터(페이지네이션, 오더링) 구현 목표
  - BE 측면 : 로그인, 회원가입, 로그인한 회원의 찜하기 기능 및 상품 내부 옵션별 데이터 구성, 쿼리파라미터를 이용하여 하나의 라우터와 서비스를 통해 제품 조회관련 모든 기능 구현 목표

### 개발 인원 및 기간

- 팀명: 헬스잇(HealthEat)
- 개발기간 : 2022년 11월 14일 ~ 2022년 11월 25일 (10일)
- 개발인원 : 프론트엔드 3명, 백엔드 2명
    - FE : 우석민, 이상윤, 이혜원
    - BE : 이은영, 조상원
    - [프론트엔드 github 링크](https://github.com/wecode-bootcamp-korea/39-1st-HealthEat-frontend)
    - [백엔드 github 링크](https://github.com/wecode-bootcamp-korea/39-1st-HealthEat-backend)

## 적용 기술 및 구현 기능



### 적용 기술

- **FE** : JavaScript, React.js, Sass, CRA, React Router Dom, Scss, eslint
- **BE** : JavaScript, Node.js, Express, MySQL 8.0, Postman, Bcrypt, JWT
- **협업 툴** : Notion, Slack, Figma, dbdiagram.io, Google Meeting, Google Drive

### 구현 기능

- 조상원
    - 로그인,회원가입
        - Bcrypt 암호화와 JsonWebToken 인증을 적용한 회원가입, 로그인 기능 API 구현
    - 제품 전체 페이지
        - 필터,정렬, 페이지네이션을 적용하여 리스트 불러오는 api구현
    - 제품 상세 페이지
    - [API Document](https://documenter.getpostman.com/view/24101709/2s8YmUMzja)
      
- 이은영
    - 찜하기 생성, 조회 및 삭제 API 구현
        - JsonWebToken을 통하여 얻은 user id로 제품 찜하기 Create, Read, Delete 구현
    - API Document

### 상세내용

- 로그인 기능 구현

![필리마켓-8_AdobeExpress 2](https://user-images.githubusercontent.com/107943132/205479515-147f9bcf-78df-4b69-a19a-9eabb34b533b.GIF)

- 전체 상품 조회 및 카테고리별 필터링

![필리마켓_AdobeExpress 2](https://user-images.githubusercontent.com/107943132/205479523-8f42e79f-fb17-43f5-ad47-24ea0ed755b3.GIF)


## API Document

[HealthEat - API Document](https://documenter.getpostman.com/view/24101709/2s8YmUMzja)

## Reference

- 이 프로젝트는 [pilly스토어 사이트](https://pilly.kr/store)를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 모두 무료로 제공되는 소스를 이용하였습니다.
