import LogoTealText from "../assets/logo/LogoTealText.svg";
function Signup() {
  return (
    <>
      <main className="flex ">
        <div className=" w-3/12 ">
          <img
            src="/src/assets/Authentication/SidebarSignup.jpeg"
            alt="Side Bar"
            className="w-full object-fill"
          />
        </div>
        <div className=" w-9/12 px-14">
          <img
            src={LogoTealText}
            alt="Logo"
            className="w-[410px] h-[211px] ml-auto mr-auto"
          />
          <form>
            <div className="flex">
              <div>
                <div>
                  <label>First Name</label> <br />
                  <input type="text " placeholder="Ahmad" />
                </div>
                <div>
                  <label>Email</label>
                  <br />
                  <input type="email" placeholder="example@example.com" />
                </div>
                <div>
                  <label>Adress</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Qesm ElMoqatam, Cairo, Egypt"
                  />
                  <span>This will be the delivery address</span>
                </div>
                <div>
                  <label>Date of birth</label>
                  <br />
                  <input type="date" />
                </div>
                <div>
                  <label>Account</label>
                  <br />
                  <input type="radio" value="Shopping" />{" "}
                  <label>Shopping</label>
                  <input type="radio" value="Selling" /> <label>Selling</label>
                  <p className="text-FlamingoPink">
                    This cannot be changed later
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <label>Second Name</label>
                  <br />
                  <input type="text" placeholder="Taha" />
                </div>
                <div>
                  <label>Password</label>
                  <br />
                  <input type="password" />
                </div>
                <div>
                  <label>Phone</label>
                  <br />
                  <input type="tel" placeholder="+201232453123" />
                </div>
                <div>
                  <label>Gender</label>
                  <br />
                  <input type="radio" value="Male" /> <label>Male</label>
                  <input type="radio" value="Female" /> <label>Female</label>
                </div>
              </div>
            </div>
            <div>
              <p className="bold">
                Select categories that you might be interested in
              </p>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <input
                        type="checkbox"
                        id="image1"
                        name="images[]"
                        value="image1"
                      />
                      <label htmlFor="image1">
                        <img src="image1.jpg" alt="Image 1" />
                      </label>
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        id="image2"
                        name="images[]"
                        value="image2"
                      />
                      <label htmlFor="image2">
                        <img src="image2.jpg" alt="Image 2" />
                      </label>
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        id="image3"
                        name="images[]"
                        value="image3"
                      />
                      <label htmlFor="image3">
                        <img src="image3.jpg" alt="Image 3" />
                      </label>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <input
              type="submit"
              value="SIGN UP"
              className="bg-FlamingoPink text-white"
            />
          </form>
          <hr className="bg-gray" />
          <div>
            <span>Already have an account?</span>{" "}
            <a href="/" className="text-gray">
              Log in
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default Signup;
