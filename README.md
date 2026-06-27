# 제주 스크랩북 — K뉴딜 아카데미 K-Tour LX 콘텐츠 마케팅 런케이션

Claude Design 프로젝트 **`제주스크랩북.dc.html`** 를 정적(standalone) 웹페이지로 구현한 결과물입니다.

- 원본: `K뉴딜 아카데미 홈페이지 디자인` 프로젝트 (`3b1516e9-5dcf-409a-90c4-269362800b37`)
- 결과: [index.html](index.html) — 단일 파일, 외부 빌드/런타임 불필요

## 무엇을 했나

원본 `.dc.html` 은 Claude Design 의 `support.js`(React 기반 dc-runtime)로 렌더링되며, `{{ ink }}`,
`{{ accent }}` 같은 템플릿 변수와 `<sc-for>` / `<sc-if>` 디렉티브를 사용합니다. 이를 그대로 복사하는
대신, 다음과 같이 **순수 정적 페이지로 변환**했습니다.

- 모든 템플릿 변수를 디자인 기본 테마 값으로 해석해 `:root` 의 CSS 변수로 노출
  (`paperTone=모눈 노트`, `accent=#ff5b5b`, `handFont=개구(둥글)`, `photoFrame=폴라로이드`,
  `tilt=살짝 기울게`, `headline=크게`). → 마크업을 건드리지 않고 테마 재조정 가능.
- 인터랙션(배경 사진 회전, 이미지 클릭 확대, FAQ 아코디언, 갤러리 사진 셔플)을 바닐라 JS 로 재구현.
  React·dc-runtime 의존성 없음.
- 본문 폰트 Pretendard 는 CDN(jsDelivr), 손글씨/제목 폰트는 Google Fonts 로 로드.

## 보기

`index.html` 을 브라우저에서 열면 됩니다. 정적 페이지라 별도 서버가 필요 없지만, 로컬 서버로 여는 것을 권장:

```bash
python -m http.server 8000   # → http://localhost:8000
```

## 에셋(uploads/) — 직접 채워 넣어야 하는 파일

Claude Design MCP 의 파일 다운로드는 **256 KiB** 제한이 있어, 용량이 큰 **사진과 폰트 파일은 가져오지
못했습니다**(가져오면 잘려서 깨짐). 아래 파일들을 디자인 프로젝트의 `uploads/` 폴더에서 그대로 내려받아
같은 경로에 넣어주세요.

### ✅ 포함됨 (벡터 로고, 그대로 렌더링)
```
uploads/logo/knda_bi_1logo.svg
uploads/logo/mog_logo.svg
uploads/logo/logo_hankyung_ci.svg
uploads/logo/kx_logo_01.svg
uploads/logo/kensingtons_bi.svg
```

### ⬇️ 채워 넣어야 함 (페이지가 참조하는 경로)
```
uploads/logo/knda_logo.svg                       # 네비게이션 로고 (현재 참조 중)
uploads/logo/logo_eland_park.jpg                 # 푸터 '참여' 로고

uploads/kensington/kensigton_hanlim.jpg          # 숙소 전경
uploads/kensington/kensington_lvingroom.jpg      # 객실 거실
uploads/kensington/kensington_sea_view.jpg       # 바다뷰
uploads/kensington/4in1room.png                  # 4인 1실
uploads/kensington/kensington_kitchen.jpg        # 주방
uploads/kensington/bathroom.jpg                  # 욕실
uploads/kensington/kensington_cafe.jpg           # 바다뷰 카페
uploads/kensington/jeju_kensington_hanlim_map.png# 위치 지도
uploads/kensington/ara_hall_door.png             # 아라홀 입구
uploads/kensington/ara_hall_01.jpg               # 아라홀 강의장
uploads/kensington/ara_hall_02.jpg               # 아라홀 수업 공간

# 히어로 + 갤러리 풀 (가로 사진 7장)
uploads/jeju_horizontal/GettyImages-a12152731.jpg
uploads/jeju_horizontal/GettyImages-a12197147.jpg
uploads/jeju_horizontal/GettyImages-a12206965.jpg
uploads/jeju_horizontal/GettyImages-a12223575.jpg
uploads/jeju_horizontal/GettyImages-a12230716.jpg
uploads/jeju_horizontal/GettyImages-a12602104.jpg
uploads/jeju_horizontal/GettyImages-a12602295.jpg

# 갤러리 풀 (세로 사진 7장)
uploads/jeju_vertical/GettyImages-1327113564.jpg
uploads/jeju_vertical/GettyImages-1332159646.jpg
uploads/jeju_vertical/GettyImages-a10464509.jpg
uploads/jeju_vertical/GettyImages-a11997018.jpg
uploads/jeju_vertical/GettyImages-a11997038.jpg
uploads/jeju_vertical/GettyImages-jv12255293.jpg
uploads/jeju_vertical/GettyImages-jv12627573.jpg

# 회전 배경 (6장)
uploads/jeju_background/GettyImages-1271897700.jpg
uploads/jeju_background/GettyImages-a12232019.jpg
uploads/jeju_background/GettyImages-jv12624803.jpg
uploads/jeju_background/GettyImages-jv12624809.jpg
uploads/jeju_background/GettyImages-jv12624810.jpg
uploads/jeju_background/GettyImages-jv12624811.jpg
```

### 폰트 (선택 — 없어도 동작)
```
uploads/fonts/EF_jejudoldam(TTF).ttf
```
제목용 제주돌담체. 이 파일을 넣으면 제목이 제주돌담체로 표시되고, 없으면 자동으로
**Black Han Sans**(Google Fonts) 로 대체됩니다. 본문 Pretendard 는 CDN 으로 로드하므로 별도 파일 불필요.

## ✎ 스크랩북 꾸미기 (트윅스 패널)

우측 하단 **✎ 버튼**으로 페이지를 실시간 재설정합니다. 모든 값은 자동 저장되고, 이름을 붙여
여러 벌로 저장/불러오기/덮어쓰기/삭제할 수 있어요.

- **포인트 색** · **종이 질감**(크라프트·모눈·줄·빈티지·한지·구겨진 종이·코넬식·College Ruled)
- **손글씨 폰트** · **기울기** · **사진 프레임** · **제목 크기**
- **배경 사진 투명도** 슬라이더 — 히어로/런케이션 영역에 배경 사진이 비치는 정도
- **손글씨 낙서 표시** 토글
- **✏️ 텍스트 편집** — 켜면 페이지의 일반 텍스트와 사진 글자를 모두 클릭해 수정. 글자를 드래그해 **선택 글자 색**을 바꿀 수도 있어요(자동 저장).
- **내 설정 저장/불러오기/삭제** — 여러 프리셋 관리
- **📦 퍼블리싱** — 현재 설정·편집 상태 그대로 최종 페이지를 **`index.html` / `styles.css` / `script.js` 3개 파일**로 내보냅니다(편집기는 제외). 세 파일을 같은 폴더에 두고 `uploads/`만 함께 두면 바로 동작합니다.

> 배경: 히어로는 투명(배경 사진 그대로), 런케이션(#prog)은 그라데이션으로 사진이 비치고,
> 그 아래부터는 선택한 종이 질감으로 보입니다. 배경 사진은 스크롤과 함께 움직입니다.

## 채워 넣어야 할 실제 내용 (지원서 링크 등)

- 히어로/네비/지원 섹션의 **지원 버튼 링크**가 현재 `https://forms.gle/` 더미입니다.
  실제 Google Form 주소로 교체하세요. ([index.html](index.html) 에서 `forms.gle` 검색)
