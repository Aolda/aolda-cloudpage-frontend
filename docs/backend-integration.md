# Backend Integration (Docker)

프론트(`aolda-cloudpage-frontend`)에서 `aolda-ahp-backend` API를 로컬 도커로 연동하는 가이드입니다.

## 1) 백엔드 컨테이너 실행

```bash
npm run backend:up
```

- 백엔드는 `http://localhost:8001`로 노출됩니다.
- Swagger 문서: `http://localhost:8001/docs`

## 2) 프론트 API 모드

`.env.local`은 실제 백엔드 호출 모드로 설정되어 있습니다.

```env
USE_MOCK_API=false
NEXT_PUBLIC_USE_MOCK_API=false
NEXT_PUBLIC_API_BASE_URL=http://localhost:8001
```

## 3) 프론트 실행

```bash
npm run dev
```

## 4) 자주 쓰는 명령

```bash
npm run backend:logs
npm run backend:down
```

## 5) 참고

- 현재 `docker-compose.backend.yml`은 백엔드를 `USE_MOCK_DATA=true`로 실행합니다.
- 즉, **프론트는 실제 백엔드 API를 호출**하지만, 백엔드 내부 데이터소스는 mock 저장소를 사용합니다.
- 운영 DB/Notion 연동으로 확장할 때는 백엔드 환경변수(`DATABASE_URL`, `NOTION_API_KEY`, `NOTION_TEAM_DB_IDS`)를 추가 설정하세요.
