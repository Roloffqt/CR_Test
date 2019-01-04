<template>
  <div class="jumbotron">
    <div class="container">
      <div class="title_container">
        <h4>Modtager</h4>
      </div>
      <!-- boxes container -->
      <div>
        <!-- Boxes -->
        <div id="shippingForm">
          <form>
            <div class="form-group">
              <input type="text" class="form-control" id="NameInput" placeholder="Firmanavn">
            </div>
            <div class="form-group">
              <input type="text" class="form-control" id="attInput" placeholder="Att:">
            </div>
            <div class="form-group">
              <input type="text" class="form-control" id="adressInput" placeholder="Adresse">
            </div>
            <div class="form-group form-group-split">
              <input type="number" class="form-control" id="ZipInput" placeholder="Postnummer">
              <input type="text" class="form-control" id="CityInput" placeholder="By">
            </div>
            <div class="form-group">
              <input type="number" class="form-control" id="PhoneInput" placeholder="Mobilnummer">
            </div>
            <div class="form-group">
              <input type="Email" class="form-control" id="EmailInput" placeholder="Email">
            </div>

            <div class="radio-container">
              <label class="container">
                <input type="radio" name="radio">
                <p class="radio-label">Erherv</p>
                <span class="checkmark"></span>
              </label>
            </div>
          </form>
        </div>
        <!-- /boxes -->
      </div>
      <!-- /boxes container -->
      <!-- btn -->
      <div class="btn_con">
        <button type="button" class="btn btn-primary">Næste</button>
      </div>
      <!-- /btn -->
    </div>
  </div>
</template>

<style scoped>
.jumbotron {
  background-color: white !important;
  margin: 10px;
  padding: 20px !important;
}
.radio-label {
  margin-left: 30px;
  line-height: 1.1;
  font-size: 1rem;
}
/* The container */
.radio-container .container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.radio-container .container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.radio-container .checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  background-color: #eee;
  border-radius: 50%;
}

/* When the radio button is checked, add a blue background */
.radio-container .container input:checked ~ .checkmark {
  background-color: #fff;
  border: 1px solid #2196f3;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.radio-container .checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.radio-container .container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.radio-container .container .checkmark:after {
  top: 4px;
  left: 4px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #2196f3;
}
#ZipInput {
  margin: 0 8px 0 0 !important;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  flex-basis: 60%;
}
.form-control {
  padding: 25px 10px !important;
}
.form-group {
  margin: 8px 0 !important;
}
.form-group-split {
  display: flex;
  flex: 0 1 60%;
}
#shippingForm {
  margin: auto;
  width: 100%;
  max-width: 480px;
}
.btn_con {
  text-align: center;
  width: 100%;
}
.btn {
  font-size: 1.2rem !important;
  font-weight: 500 !important;
  border-radius: 25px !important;
  padding: 8px 18px !important;
  margin: 20px;
}
.title_container {
  text-align: center;
}
.title_container h4 {
  font-weight: 600;
}
.container {
  padding: 0 !important;
}
.boxes_container {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
}
.box_img_container {
  height: 70px;
  margin: 5px 10px;
}
.box {
  padding: 10px;
  height: 150px;
  display: flex;
  flex: 1 0 40%;
  flex-direction: column;
  text-align: center;
  border: 1px solid #ececec;
  margin: 5px;
  border-radius: 8px;
}
.box img {
  width: 70px;
  margin: 10px auto;
}
.box p {
  margin: 0 !important;
  font-weight: 600;
}
</style>