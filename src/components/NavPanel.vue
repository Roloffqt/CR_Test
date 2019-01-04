<template>
  <div class="container">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item">
        <a
          class="nav-link"
          id="Privat-tab"
          data-toggle="tab"
          href="#Privat"
          role="tab"
          aria-controls="Privat"
          aria-selected="true"
        >
          <span>Privat</span>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          id="profile-tab"
          data-toggle="tab"
          href="#profile"
          role="tab"
          aria-controls="profile"
          aria-selected="false"
        >
          <span>Business</span>
        </a>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div
        class="tab-pane fade show active"
        id="Privat"
        role="tabpanel"
        aria-labelledby="Privat-tab"
      >
        <!-- TODO -> make dyanmic menu points from JSON -->
        <ul class="menu-content">
          <router-link class="home" to="/"><li>Send pakke</li></router-link>

          <li>Spor pakke</li>

          <li>Priser</li>

          <li>Pakkeshops</li>

          <li>Log in</li>
        </ul>
      </div>
      <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">.fafaf</div>
    </div>
  </div>
</template>

<style scoped>
.menu-content {
  list-style: none;
  padding: 30px;
  font-size: 1.3rem;
  color: #fff;
}
.menu-content li {
  padding: 25px 0;
  border-bottom: 2px solid #1d306a;
}
.nav-tabs {
  margin-top: 100px;
  border-color: transparent;
  padding: 0 10px;
}
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active span {
  padding-bottom: 5px;
  border-bottom: 1px solid #dee2e6;
}
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  color: #fff;
  background-color: transparent;
  border-color: transparent;
  font-weight: 600;
}
a {
  color: #dee2e6;
}
</style>