const navItems = [
  { href: "index.html", label: "홈" },
  { href: "roadmap.html", label: "로드맵" },
  { href: "resources.html", label: "리소스" },
];

const homeHighlights = [
  { value: "65%", label: "현재 학습 진행률", note: "일간 루틴과 누적 완주율을 함께 추적합니다." },
  { value: "12주", label: "권장 학습 플랜", note: "기초부터 인프라까지 3개월 코스로 설계했습니다." },
  { value: "28개", label: "추천 리소스", note: "문서, 강의, 프로젝트를 섞어 균형 있게 구성했습니다." },
];

const roadmapSteps = [
  {
    step: "STEP 1",
    title: "Internet & OS Fundamentals",
    status: "완료",
    description: "네트워크, HTTP, 리눅스, 프로세스 관리의 기초를 잡는 단계입니다.",
    bullets: ["HTTP request/response 흐름", "리눅스 기본 명령", "DNS와 TCP/IP"],
  },
  {
    step: "STEP 2",
    title: "Back-end Languages",
    status: "진행 중",
    description: "Java, Python, Node 중 하나를 골라 프레임워크와 함께 깊게 익힙니다.",
    bullets: ["언어 문법과 자료구조", "비동기/동시성", "테스트와 디버깅"],
  },
  {
    step: "STEP 3",
    title: "Relational & NoSQL",
    status: "예정",
    description: "데이터 모델링, 트랜잭션, 인덱스, 캐시 전략까지 설계 관점을 익힙니다.",
    bullets: ["SQL 작성", "MongoDB/Redis", "성능 튜닝"],
  },
  {
    step: "STEP 4",
    title: "Infrastructure",
    status: "잠금",
    description: "Docker, CI/CD, 클라우드, 배포와 관측 가능성을 연결합니다.",
    bullets: ["Docker compose", "CI/CD pipeline", "Cloud deployment"],
  },
];

const resourceCategories = [
  { id: "all", label: "전체" },
  { id: "docs", label: "문서" },
  { id: "course", label: "강의" },
  { id: "book", label: "도서" },
  { id: "project", label: "프로젝트" },
];

const resources = [
  {
    category: "docs",
    title: "MDN Web Docs",
    meta: "공식 문서",
    description: "HTTP, HTML, JavaScript 기초 레퍼런스를 빠르게 확인하기 좋습니다.",
    badge: "필수",
  },
  {
    category: "docs",
    title: "Oracle Java Documentation",
    meta: "공식 문서",
    description: "백엔드 자바 개발 시 클래스와 컬렉션 API를 검증할 때 유용합니다.",
    badge: "추천",
  },
  {
    category: "course",
    title: "Spring Boot Master Class",
    meta: "유료 강의",
    description: "REST API, 인증, 테스트, 배포 흐름을 한 번에 엮어 학습하기 좋습니다.",
    badge: "인기",
  },
  {
    category: "course",
    title: "Google Cloud Architecture",
    meta: "실습 강의",
    description: "운영 환경 설계와 배포 전략을 클라우드 관점에서 연결합니다.",
    badge: "실전",
  },
  {
    category: "book",
    title: "Clean Code",
    meta: "도서",
    description: "코드 구조와 함수 책임을 다듬어 협업 가능한 서버 코드를 만드는 데 도움됩니다.",
    badge: "베스트",
  },
  {
    category: "project",
    title: "Data-intensive Applications",
    meta: "프로젝트",
    description: "분산 시스템, 저장소, 메시징, 장애 대응 사고를 키우는 로드맵입니다.",
    badge: "고급",
  },
];

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderNav(activeHref) {
  return `
    <nav class="navbar navbar-expand-lg navbar-dark surface-nav sticky-top border-bottom border-light border-opacity-10">
      <div class="container py-2">
        <a class="navbar-brand fw-semibold d-flex align-items-center gap-2" href="index.html" aria-label="BackendTree 홈">
          <span class="avatar-mark">B</span>
          <span>BackendTree</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#siteNav" aria-controls="siteNav" aria-expanded="false" aria-label="내비게이션 열기">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="siteNav">
          <ul class="navbar-nav mx-auto gap-lg-1">
            ${navItems
              .map(
                (item) => `
                  <li class="nav-item">
                    <a class="nav-link px-lg-3 ${activeHref === item.href ? "active" : ""}" ${
                  activeHref === item.href ? 'aria-current="page"' : ""
                } href="${item.href}">${item.label}</a>
                  </li>`
              )
              .join("")}
          </ul>
          <div class="d-flex align-items-center gap-2">
            <a class="btn btn-outline-light btn-sm" href="resources.html">학습 자료</a>
            <a class="btn btn-primary btn-sm" href="roadmap.html">로드맵 시작</a>
          </div>
        </div>
      </div>
    </nav>
  `;
}

function renderFooter() {
  return `
    <footer class="container py-4 py-lg-5 footer-border">
      <div class="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3">
        <div>
          <div class="fw-semibold">BackendTree</div>
          <div class="small text-muted-soft">백엔드 취업을 위한 테크트리와 리소스를 한 곳에 모은 학습 사이트</div>
        </div>
        <div class="d-flex flex-wrap gap-3 small">
          <a class="link-light link-underline-opacity-0 link-underline-opacity-100-hover top-nav-link" href="index.html">Home</a>
          <a class="link-light link-underline-opacity-0 link-underline-opacity-100-hover top-nav-link" href="roadmap.html">Roadmap</a>
          <a class="link-light link-underline-opacity-0 link-underline-opacity-100-hover top-nav-link" href="resources.html">Resources</a>
        </div>
      </div>
    </footer>
  `;
}

function renderHomePage() {
  return `
    ${renderNav("index.html")}
    <main>
      <section class="hero-shell py-5">
        <div class="container position-relative py-3 py-lg-5">
          <div class="row align-items-center g-4 g-lg-5">
            <div class="col-lg-7">
              <div class="hero-badge badge rounded-pill text-bg-info text-uppercase fw-semibold px-3 py-2 mb-4">Backend developer track</div>
              <h1 class="display-5 fw-semibold lh-sm mb-3">백엔드 개발자 취업을 위한 테크트리를 한 화면에서 정리합니다.</h1>
              <p class="lead text-on-surface-variant mb-4">
                기초 개념부터 데이터베이스, 인프라, 실전 프로젝트까지 이어지는 학습 경로를
                실제 스크린 기준의 레이아웃으로 재구성했습니다.
              </p>
              <div class="d-flex flex-column flex-sm-row gap-2 gap-sm-3">
                <a class="btn btn-primary btn-lg px-4" href="roadmap.html">Start Roadmap</a>
                <a class="btn btn-outline-light btn-lg px-4" href="resources.html">학습 리소스</a>
              </div>
              <div class="row g-3 mt-4 mt-lg-5">
                ${homeHighlights
                  .map(
                    (item) => `
                      <div class="col-md-4">
                        <article class="surface-card h-100 p-3 p-lg-4">
                          <div class="metric-value text-white mb-2">${escapeHtml(item.value)}</div>
                          <div class="fw-semibold mb-1">${escapeHtml(item.label)}</div>
                          <p class="small mb-0 text-muted-soft">${escapeHtml(item.note)}</p>
                        </article>
                      </div>`
                  )
                  .join("")}
              </div>
            </div>
            <div class="col-lg-5">
              <div class="surface-card p-3 p-lg-4 hero-graphic position-relative overflow-hidden" style="min-height: 24rem;">
                <div class="position-absolute top-0 start-0 p-3 p-lg-4 w-100">
                  <div class="d-flex justify-content-between align-items-start mb-4">
                    <div>
                      <div class="small text-uppercase text-muted-soft">Focus flow</div>
                      <div class="h4 fw-semibold mb-0">학습 상태 요약</div>
                    </div>
                    <span class="badge rounded-pill text-bg-success-subtle text-success border border-success border-opacity-25">On track</span>
                  </div>
                  <div class="surface-soft rounded-4 p-3 mb-3">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                      <span class="small text-muted-soft">주간 진행률</span>
                      <strong>65%</strong>
                    </div>
                    <div class="progress" style="height: 0.8rem;">
                      <div class="progress-bar" style="width: 65%;" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div class="row g-2">
                    <div class="col-6">
                      <div class="surface-soft rounded-4 p-3 h-100">
                        <div class="small text-muted-soft">오늘의 목표</div>
                        <div class="fw-semibold mt-1">SQL 조인 3개 복습</div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="surface-soft rounded-4 p-3 h-100">
                        <div class="small text-muted-soft">추천 작업</div>
                        <div class="fw-semibold mt-1">Redis 캐시 실습</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-2 py-lg-4">
        <div class="container">
          <div class="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-2 mb-3 mb-lg-4">
            <div>
              <div class="section-badge text-primary fw-semibold mb-2">Learning path</div>
              <h2 class="h3 fw-semibold mb-0">핵심 로드맵</h2>
            </div>
            <a class="link-light top-nav-link small" href="roadmap.html">전체 로드맵 보기</a>
          </div>
          <div class="row g-4">
            ${roadmapSteps
              .slice(0, 3)
              .map(
                (item) => `
                  <div class="col-md-6 col-xl-4">
                    <article class="surface-card h-100 p-4">
                      <div class="d-flex justify-content-between align-items-center mb-3">
                        <span class="badge rounded-pill text-bg-secondary">${escapeHtml(item.step)}</span>
                        <span class="badge rounded-pill text-bg-info-subtle text-info border border-info border-opacity-25">${escapeHtml(item.status)}</span>
                      </div>
                      <h3 class="h5 fw-semibold">${escapeHtml(item.title)}</h3>
                      <p class="text-muted-soft mb-3">${escapeHtml(item.description)}</p>
                      <ul class="list-unstyled mb-0 d-grid gap-2 small">
                        ${item.bullets
                          .map(
                            (bullet) => `
                              <li class="d-flex gap-2 align-items-start">
                                <span class="avatar-mark flex-shrink-0 mt-1" style="width:1.4rem;height:1.4rem;border-radius:50%;">•</span>
                                <span>${escapeHtml(bullet)}</span>
                              </li>`
                          )
                          .join("")}
                      </ul>
                    </article>
                  </div>`
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="py-4 py-lg-5">
        <div class="container">
          <div class="surface-card p-4 p-lg-5 glass-blade">
            <div class="row align-items-center g-4">
              <div class="col-lg-8">
                <div class="section-badge text-info fw-semibold mb-2">Next action</div>
                <h2 class="h3 fw-semibold mb-3">지금 바로 백엔드 트리를 시작하세요.</h2>
                <p class="text-muted-soft mb-0">
                  하루 단위 체크리스트와 우선순위 리소스를 연결해, 혼자 공부할 때도 방향이 흔들리지 않도록 설계했습니다.
                </p>
              </div>
              <div class="col-lg-4 text-lg-end">
                <a class="btn btn-dark btn-lg px-4" href="roadmap.html">Get Started Free</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    ${renderFooter()}
  `;
}

function renderRoadmapPage() {
  return `
    ${renderNav("roadmap.html")}
    <main class="container py-4 py-lg-5">
      <div class="row g-4">
        <aside class="col-lg-3">
          <div class="surface-card p-3 p-lg-4 sticky-lg-top sticky-offset">
            <div class="small text-uppercase text-muted-soft mb-2">Progress</div>
            <div class="h5 fw-semibold mb-1">Level 1</div>
            <p class="small text-muted-soft mb-3">B2B 백엔드 엔지니어 준비 중</p>
            <div class="surface-soft rounded-4 p-3 mb-3">
              <div class="d-flex justify-content-between small mb-2">
                <span>완료 단계</span>
                <strong>2 / 4</strong>
              </div>
              <div class="progress" style="height: 0.8rem;">
                <div class="progress-bar" style="width: 50%;" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="nav nav-pills flex-column gap-2" role="tablist" aria-label="로드맵 단계">
              ${roadmapSteps
                .map(
                  (item, index) => `
                    <button class="nav-link text-start ${index === 1 ? "active" : ""}" type="button">
                      <div class="small text-uppercase">${escapeHtml(item.step)}</div>
                      <div class="fw-semibold">${escapeHtml(item.title)}</div>
                    </button>`
                )
                .join("")}
            </div>
          </div>
        </aside>
        <section class="col-lg-9">
          <div class="surface-card p-4 p-lg-5 mb-4">
            <div class="section-badge text-primary fw-semibold mb-2">Roadmap</div>
            <h1 class="display-6 fw-semibold mb-3">Backend Developer Tech Tree</h1>
            <p class="text-muted-soft col-lg-10 mb-0">
              기초부터 인프라까지 단계적으로 연결된 백엔드 학습 경로입니다. 각 스텝은 실무에서 자주 쓰는 지식 단위로 나뉘며,
              진행률과 상태를 함께 관리하도록 구성했습니다.
            </p>
          </div>
          <div class="d-grid gap-4">
            ${roadmapSteps
              .map(
                (item, index) => `
                  <article class="surface-card p-4 p-lg-5 timeline-line">
                    <span class="timeline-dot" aria-hidden="true"></span>
                    <div class="row g-4 align-items-start">
                      <div class="col-lg-8">
                        <div class="d-flex flex-wrap align-items-center gap-2 mb-3">
                          <span class="badge rounded-pill text-bg-secondary">${escapeHtml(item.step)}</span>
                          <span class="badge rounded-pill ${index < 2 ? "text-bg-success-subtle text-success border border-success border-opacity-25" : "text-bg-warning-subtle text-warning border border-warning border-opacity-25"}">${escapeHtml(item.status)}</span>
                        </div>
                        <h2 class="h4 fw-semibold mb-2">${escapeHtml(item.title)}</h2>
                        <p class="text-muted-soft mb-4">${escapeHtml(item.description)}</p>
                        <div class="row g-2">
                          ${item.bullets
                            .map(
                              (bullet) => `
                                <div class="col-md-4">
                                  <div class="surface-soft rounded-4 p-3 h-100 small">${escapeHtml(bullet)}</div>
                                </div>`
                            )
                            .join("")}
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="surface-soft rounded-4 p-4 h-100">
                          <div class="small text-muted-soft mb-2">Recommended outcome</div>
                          <div class="fw-semibold mb-3">${index === 0 ? "네트워크와 서버 흐름을 설명할 수 있어야 합니다." : index === 1 ? "언어와 프레임워크 선택 후 API를 만들 수 있어야 합니다." : index === 2 ? "데이터 저장소와 캐시 설계 근거를 제시할 수 있어야 합니다." : "배포와 관측 가능성을 연결해 운영을 이해해야 합니다."}</div>
                          <div class="small text-muted-soft">실행 과제</div>
                          <ul class="list-unstyled small d-grid gap-2 mt-2 mb-0">
                            <li>실습 노트 3개 작성</li>
                            <li>미니 프로젝트 1개 연결</li>
                            <li>다음 단계 체크리스트 확인</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </article>`
              )
              .join("")}
          </div>
        </section>
      </div>
    </main>
    ${renderFooter()}
  `;
}

function renderResourcesPage() {
  return `
    ${renderNav("resources.html")}
    <main class="container py-4 py-lg-5">
      <section class="surface-card p-4 p-lg-5 mb-4">
        <div class="row align-items-end g-4">
          <div class="col-lg-8">
            <div class="section-badge text-primary fw-semibold mb-2">Resource center</div>
            <h1 class="display-6 fw-semibold mb-3">학습 리소스 센터</h1>
            <p class="text-muted-soft mb-0">
              공식 문서, 강의, 도서, 프로젝트를 유형별로 정리해 학습 흐름에 맞게 바로 선택할 수 있도록 구성했습니다.
            </p>
          </div>
          <div class="col-lg-4">
            <div class="surface-soft rounded-4 p-3">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <span class="small text-muted-soft">이번 주 학습 루틴</span>
                <span class="badge rounded-pill text-bg-info-subtle text-info border border-info border-opacity-25">4 steps</span>
              </div>
              <div class="progress mb-2" style="height: 0.8rem;">
                <div class="progress-bar" style="width: 72%;" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div class="small text-muted-soft">문서 2개, 강의 1개, 프로젝트 1개를 균형 있게 섞는 것이 목표입니다.</div>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-4">
        <div class="d-flex flex-wrap gap-2" role="toolbar" aria-label="리소스 필터">
          ${resourceCategories
            .map(
              (item, index) => `
                <button class="chip ${index === 0 ? "is-active" : ""}" type="button" data-filter="${escapeHtml(item.id)}">${escapeHtml(item.label)}</button>`
            )
            .join("")}
        </div>
      </section>

      <section class="row g-4">
        <div class="col-lg-8">
          <div class="row g-4" id="resourceGrid">
            ${resources
              .map(
                (item) => `
                  <div class="col-md-6" data-category="${escapeHtml(item.category)}">
                    <article class="surface-card resource-card h-100 p-4">
                      <div class="d-flex justify-content-between align-items-start mb-3">
                        <div class="avatar-mark">↗</div>
                        <span class="badge rounded-pill text-bg-secondary">${escapeHtml(item.badge)}</span>
                      </div>
                      <h2 class="h5 fw-semibold mb-2">${escapeHtml(item.title)}</h2>
                      <div class="small text-primary fw-semibold mb-2">${escapeHtml(item.meta)}</div>
                      <p class="text-muted-soft mb-4">${escapeHtml(item.description)}</p>
                      <a href="#" class="link-info text-decoration-none fw-semibold">리소스 열기</a>
                    </article>
                  </div>`
              )
              .join("")}
          </div>
        </div>
        <aside class="col-lg-4">
          <div class="surface-card p-4 p-lg-4 sticky-lg-top sticky-offset">
            <div class="section-badge text-info fw-semibold mb-2">Suggested plan</div>
            <h2 class="h5 fw-semibold mb-3">학습 루틴 예시</h2>
            <div class="d-grid gap-3">
              <div class="surface-soft rounded-4 p-3">
                <div class="small text-muted-soft mb-1">월/화</div>
                <div class="fw-semibold">공식 문서와 예제 코드 읽기</div>
              </div>
              <div class="surface-soft rounded-4 p-3">
                <div class="small text-muted-soft mb-1">수/목</div>
                <div class="fw-semibold">강의 실습과 API 구현</div>
              </div>
              <div class="surface-soft rounded-4 p-3">
                <div class="small text-muted-soft mb-1">금/토</div>
                <div class="fw-semibold">미니 프로젝트와 회고</div>
              </div>
            </div>
            <hr class="border-light border-opacity-10 my-4">
            <div class="small text-muted-soft mb-2">최근 체크포인트</div>
            <ul class="list-unstyled d-grid gap-2 small mb-0">
              <li>HTTP 상태 코드 정리</li>
              <li>SQL 인덱스 실습</li>
              <li>Docker 이미지 생성</li>
            </ul>
          </div>
        </aside>
      </section>
    </main>
    ${renderFooter()}
  `;
}

function setupResourceFilters() {
  const chips = Array.from(document.querySelectorAll("[data-filter]"));
  const cards = Array.from(document.querySelectorAll("#resourceGrid [data-category]"));
  if (!chips.length || !cards.length) return;

  const applyFilter = (filterId) => {
    chips.forEach((chip) => chip.classList.toggle("is-active", chip.dataset.filter === filterId));
    cards.forEach((card) => {
      const visible = filterId === "all" || card.dataset.category === filterId;
      card.classList.toggle("d-none", !visible);
    });
  };

  chips.forEach((chip) => {
    chip.addEventListener("click", () => applyFilter(chip.dataset.filter || "all"));
  });
}

function bootstrapPage() {
  const root = document.querySelector("#app");
  if (!root) return;

  const page = document.body.dataset.page;
  root.innerHTML =
    page === "roadmap"
      ? renderRoadmapPage()
      : page === "resources"
      ? renderResourcesPage()
      : renderHomePage();

  setupResourceFilters();
}

document.addEventListener("DOMContentLoaded", bootstrapPage);
