<template>
  <div class="container">
    <div class="sign-up-form">
      <!-- Left (Form Image) -->
      <div class="form-image">
        <img src="@/assets/SignupPage/form-bg.png" alt="" />
      </div>
      <!-- Right (Form Content) -->
      <form class="form-content">
        <!-- Form Heading -->
        <div class="form-heading">
          <img src="@/assets/SignupPage/logo.png" alt="" />
          <h1>Create Account</h1>
          <p>Please fill out all the required fields to create your account!</p>
        </div>
        <!-- Input Wrap -->
        <div class="input-wrap">
          <div class="input">
            <input type="text" id="username" placeholder=" " />
            <div class="label">
              <label for="username">Username</label>
            </div>
          </div>
          <div class="input">
            <input type="email" id="email" placeholder=" " />
            <div class="label">
              <label for="email">Email</label>
            </div>
          </div>
          <div class="input">
            <input type="password" id="password" placeholder=" " />
            <div class="label">
              <label for="password">Password</label>
            </div>
          </div>
          <div class="input">
            <input type="password" id="confirmPassword" placeholder=" " />
            <div class="label">
              <label for="confirmPassword">Confirm Password </label>
            </div>
          </div>
          <button type="submit">Create Account</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap");

.container {
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: #f1f1f1;
  font-weight: 300;
  padding: 0 24px;
}

.sign-up-form {
  display: flex;
  flex-direction: column;
  max-width: 900px;
  width: 100%;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  border-radius: 12px;
  background-color: #fff;
}

.form-image {
  display: none;
}

/* Form Content */
.form-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
}

/* From Heading */

.form-heading {
  text-align: center;
  margin-bottom: 32px;
}

.form-heading img {
  width: 3rem;
  height: auto;
}

h1 {
  font-size: 24px;
  font-weight: 500;
}

p {
  font-size: 14px;
}

/* Form fields */

.input-wrap {
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 100%;
}

.input {
  display: flex;
  flex-direction: column;
  position: relative;
}

input {
  width: 100%;
  padding: 8px 0;
  border: none;
  border-bottom: 1px solid #181824;
  transition: 300ms;
  font-size: 14px;
  font-weight: 300;
}

input:focus {
  outline: none;
  box-shadow: 0 1px 0 0 #6236ff;
  border-color: #6236ff;
}

.label {
  display: flex;
  position: absolute;
  height: 100%;
  align-items: center;
  transition: 300ms ease;
}

label {
  display: block;
  font-size: 14px;
  color: #b0b0b0;
}

/* Label Effect */
input:focus + .label,
input:not(:placeholder-shown) + .label {
  transform: translateY(-27px);
}

input:focus + .label label,
input:not(:placeholder-shown) + .label label {
  font-weight: 500;
  color: initial;
}

button {
  padding: 12px 18px;
  border: none;
  align-self: flex-start;
  background-color: #6236ff;
  color: #fff;
  border-radius: 12px;
  transition: 300ms;
}

button:hover {
  cursor: pointer;
  background-color: #f1f1f1;
  color: #6236ff;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}

/* Desktop Styles */
@media (min-width: 900px) {
  .sign-up-form {
    flex-direction: row;
  }

  /* Image / Branding */

  .form-image {
    display: block;
    flex-basis: 45%;
    background-image: url("@/assets/SignupPage/bg-black-square.png");
    border-radius: 12px 0 0 12px;
  }

  .form-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px 0 0 12px;
  }

  h1 {
    font-size: 32px;
    font-weight: 500;
  }

  p {
    font-size: 16px;
  }
}
</style>
