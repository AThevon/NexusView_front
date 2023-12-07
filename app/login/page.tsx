import Header from "@/components/header"

const Login = () => {
    return (
        <div>
            <Header />
            <form>
                <input type="text" name="username" placeholder="Username" />
                <input type="password" name="password" placeholder="Password" />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login