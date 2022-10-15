import Logo from "../constants/images/formulargray_03.png";
export const Signup = () => {
  const signUpOptions = [
    { id: "student", title: "Student" },
    { id: "agency", title: "Agency" },
    { id: "institution", title: "Institition" },
  ];
  return (
    <>
      {}
      <div className="flex overflow-y-hidden h-screen min-h-full">
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://img.freepik.com/free-photo/overhead-portrait-international-students-waiting-test-college-group-university-mates-sitting-floor-with-books-laptops-doing-homework_197531-3819.jpg?w=2000"
            alt="image"
          />
        </div>
        <div className="flex h-full flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <a href="/">
                <img className="h-8 w-auto" src={Logo} alt="Your Company" />
              </a>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
                Create an account
              </h2>
            </div>

            <div className="mt-2">
              <div className="mt-3">
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      Sign up as:
                    </label>
                    <fieldset className="mt-3">
                      <legend className="sr-only">Sign up as</legend>
                      <div className="space-y-4">
                        {signUpOptions.map((option) => (
                          <div key={option.id} className="flex items-center">
                            <input
                              id={option.id}
                              name="signUpOption"
                              type="radio"
                              defaultChecked={option.id === "student"}
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={option.id}
                              className="ml-3 block text-sm font-medium text-gray-700"
                            >
                              {option.title}
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Confirm password
                    </label>
                    <div className="mt-1">
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex">
                    <div>Already have an account? </div>
                    <div className="text-blue-500 ml-1">
                      <a href="/signin">Sign in</a>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
