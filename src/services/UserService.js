import fetch from "auth/FetchInterceptor"


const userService = {}


userService.fetchAll = async () => {
    return await fetch({
      url: `/users`,
      method: "get",
      headers: {
        "public-request": "true",
      },
    })
}

export default userService