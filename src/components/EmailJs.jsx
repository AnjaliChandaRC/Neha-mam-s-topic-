import React, { useState } from "react";
import emailjs from "@emailjs/browser";

emailjs.init("xXqwLEQi83kdIbXx_");
const EmailJs = () => {
  const formData = {
    firstname: "",
    lastname: "",
    subject: "",
    email: "",
    password: "",
    confirmpassword: "",
    phone: "",
    selectOne: "",
    selectTwo: "",
    selectThree: "",
  };
  const [formvalue, setFormvalue] = useState(formData);
  const [error, setError] = useState(false);
  const [showHidePassword, setShowHidePassword] = useState(false);
  const [showConfirmHidePassword, setShowConfirmHidePassword] = useState(false);

  const SubmitData = (e) => {
    setError(true);
    e.preventDefault();
    if (
      formvalue.firstname !== "" &&
      formvalue.lastname !== "" &&
      formvalue.subject !== "" &&
      formvalue.email !== "" &&
      formvalue.password !== "" &&
      // formvalue.password === formvalue.confirmpassword &&
      formvalue.phone !== "" &&
      formvalue.selectOne !== "" &&
      formvalue.selectTwo !== "" &&
      formvalue.selectThree !== ""
    ) {
      emailjs
        .send("service_zjrsnhc", "template_2420vbl", {
          firstname: formvalue.firstname,
          lastname: formvalue.lastname,
          subject: formvalue.subject,
          email: formvalue.email,
          password: formvalue.password,
          confirmpassword: formvalue.confirmpassword,
          phone: formvalue.phone,
          FavColor: formvalue.selectOne,
          FavFruit: formvalue.selectTwo,
          FavAnimal: formvalue.selectThree,
        })
        .then((res) => {
          console.log("formvalue", formvalue, res);
          alert("Success!!");
          setError(false);
          setFormvalue(formData);
        })
        .catch(() => {
          alert("Error");
        });
    }
  };
  return (
    <>
      <section>
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
          <div className="row">
            <div className="col">
              <form action="">
                <div>
                  <input
                    onChange={(e) =>
                      setFormvalue({ ...formvalue, firstname: e.target.value })
                    }
                    type="text"
                    placeholder="First Name"
                    value={formvalue.firstname}
                  />
                  <p className="text-danger mb-0 fw-normal">
                    {error && formvalue.firstname === ""
                      ? "First Name is Required"
                      : ""}
                  </p>
                </div>
                <div className="pt-3">
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={formvalue.lastname}
                    onChange={(e) =>
                      setFormvalue({ ...formvalue, lastname: e.target.value })
                    }
                  />
                  <p className="text-danger mb-0 fw-normal">
                    {error && formvalue.lastname === ""
                      ? "Last Name is Required"
                      : ""}
                  </p>
                </div>
                <div className="pt-3">
                  <input
                    type="text"
                    placeholder="Subject"
                    value={formvalue.subject}
                    onChange={(e) =>
                      setFormvalue({ ...formvalue, subject: e.target.value })
                    }
                  />
                  <p className="text-danger mb-0 fw-normal">
                    {error && formvalue.subject === ""
                      ? "Subject is Required"
                      : ""}
                  </p>
                </div>
                <div className="pt-3">
                  <input
                    type="email"
                    placeholder="Email"
                    value={formvalue.email}
                    onChange={(e) =>
                      setFormvalue({ ...formvalue, email: e.target.value })
                    }
                  />
                  <p className="text-danger mb-0 fw-normal">
                    {error && formvalue.email === "" ? "Email is Required" : ""}
                  </p>
                </div>
                <div className="pt-3 position-relative">
                  <div className="d-flex">
                    <input
                      type={showHidePassword ? "text" : "password"}
                      placeholder="Password"
                      value={formvalue.password}
                      onChange={(e) =>
                        setFormvalue({
                          ...formvalue,
                          password: e.target.value,
                        })
                      }
                    />
                    <div
                      className="position-absolute eye_position cursor"
                      onClick={() => setShowHidePassword(!showHidePassword)}
                    >
                      {showHidePassword ? "Show" : "Hide"}
                    </div>
                    <p className="text-danger mb-0 fw-normal">
                      {error && formvalue.password === ""
                        ? "Password is Required"
                        : ""}
                    </p>
                  </div>
                </div>
                <div className="pt-3 position-relative">
                  <div className="d-flex">
                    <input
                      type={showConfirmHidePassword ? "text" : "password"}
                      placeholder="Confirm Password"
                      value={formvalue.confirmpassword}
                      onChange={(e) =>
                        setFormvalue({
                          ...formvalue,
                          confirmpassword: e.target.value,
                        })
                      }
                    />
                    <div
                      className="position-absolute eye_position cursor"
                      onClick={() =>
                        setShowConfirmHidePassword(!showConfirmHidePassword)
                      }
                    >
                      {showConfirmHidePassword ? "Show" : "Hide"}
                    </div>
                    <p className="text-danger mb-0 fw-normal">
                      {error && formvalue.confirmpassword === ""
                        ? "Password is Required"
                        : error &&
                          formvalue.confirmpassword === formvalue.password
                        ? "This password is not same"
                        : ""}
                    </p>
                  </div>
                </div>
                <div className="pt-3">
                  <input
                    type="number"
                    placeholder="Phone"
                    value={formvalue.phone}
                    onChange={(e) =>
                      setFormvalue({ ...formvalue, phone: e.target.value })
                    }
                  />
                  <p className="text-danger mb-0 fw-normal">
                    {error && formvalue.phone === ""
                      ? "Number is Required"
                      : ""}
                  </p>
                </div>
                <div className="pt-3">
                  <select
                    className="w-100"
                    onChange={(e) =>
                      setFormvalue({ ...formvalue, selectOne: e.target.value })
                    }
                  >
                    <option value="">Select Fav. Color</option>
                    <option value="Pink">Pink</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Blue">Blue</option>
                  </select>
                </div>
                <div className="pt-3">
                  <select
                    className="w-100"
                    onChange={(e) =>
                      setFormvalue({ ...formvalue, selectTwo: e.target.value })
                    }
                  >
                    <option value="">Select Fav. Fruit</option>
                    <option value="Lichi">Lichi</option>
                    <option value="Peach">Peach</option>
                    <option value="Belgiri">Belgiri</option>
                  </select>
                </div>
                <div className="pt-3">
                  <select
                    className="w-100"
                    onChange={(e) =>
                      setFormvalue({
                        ...formvalue,
                        selectThree: e.target.value,
                      })
                    }
                  >
                    <option value="">Select Fav. Bird</option>
                    <option value="Parrot">Parrot</option>
                    <option value="Peacock">Peacock</option>
                    <option value="Sparrow">Sparrow</option>
                  </select>
                </div>
                <div className="pt-3 text-center">
                  <button onClick={(e) => SubmitData(e)} type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmailJs;
