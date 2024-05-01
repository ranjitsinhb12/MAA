

function Login() {

    return (
       
        <section classNameName="bg-xdarkb overflow-auto">
        <div classNameName="grid grid-cols-1 lg:grid-cols-2 h-svh">
          <div classNameName="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div classNameName="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
              <h2 classNameName="text-3xl font-bold leading-tight text-org sm:text-4xl">
                Sign in
              </h2>
              <p  classNameName={`errorMsg? 'errorMsg' : 'offscreen' text-red-500 m-2`} aria-live="assertive"></p>
              <htmlForm    classNameName="mt-8">
                <div classNameName="space-y-5">
                  <div>
                    <label htmlhtmlFor="userName" classNameName="text-base font-medium text-back">
                      {" "}
                      Username{" "}
                    </label>
                    <div classNameName="mt-2">
                      <input
                        classNameName="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 text-back disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        id="userName"
                        autoComplete='off'
                        onChange={(e)=>setUserName(e.target.value)}
                        required
                        placeholder="Username"
                      />
                    </div>
                  </div>
                  <div>
                    <div classNameName="flex items-center justify-between">
                      <label htmlhtmlFor="password" classNameName="text-base font-medium text-back">
                        {" "}
                        Password{" "}
                      </label>
                    </div>
                    <div classNameName="mt-2">
                      <input
                        classNameName="flex h-10 text-back w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="password"
                        id='password'
                        onChange={e=>setPassword(e.target.value)}
                        placeholder="Password"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      classNameName="inline-flex w-full items-center justify-center rounded-md bg-skyb px-3.5 py-2.5 font-semibold leading-7 text-black hover:bg-darkb hover:text-white"
                    >
                      Sign In{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        classNameName="ml-2"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>
              </htmlForm>
            </div>
          </div>
          <div classNameName="h-full w-full">
            <img
              classNameName="mx-auto h-full w-full rounded-md object-cover"
              src="../../public/maa_Logo.png"
              alt=""
            />
          </div>
        </div>
      </section>
        
      
    )
}

export default Login
