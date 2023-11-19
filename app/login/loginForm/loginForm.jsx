// import { useFormState } from "react-dom";

const LoginForm = () => {
  // const [state, formAction] = useFormState(authenticate, undefined);

  return (
    <form
      action={""}
      className="bg-[color:var(--bgSoft)] w-[500px] h-[500px] flex flex-col items-center justify-center gap-[30px] p-[50px] rounded-[10px]"
    >
      <h1>Login</h1>
      <input
        type="text"
        placeholder="username"
        name="username"
        className="w-full bg-[color:var(--bg)] text-[color:var(--text)] p-[30px] rounded-[5px] border-2 border-solid border-[#2e374a]"
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        className="w-full bg-[color:var(--bg)] text-[color:var(--text)] p-[30px] rounded-[5px] border-2 border-solid border-[#2e374a]"
      />
      <button className="w-full bg-[teal] text-[color:var(--text)] cursor-pointer p-[30px] rounded-[5px] border-none">
        Login
      </button>
      {/* {state && state} */}
    </form>
  );
};

export default LoginForm;
