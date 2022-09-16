import React from "react";
import * as C from "./styles";


const LoginButtons = () => {
  return (
    <div>
        <C.Container>
            <C.Button><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" width="100%" height="75%" alt="Google"/></C.Button>
            <C.Button><img src="https://www.aberje.com.br/wp-content/uploads/2021/10/facebook-logo-3-1-1024x1024.png" width="95%" height="75%" alt="Facebook"/></C.Button>
        </C.Container>
    </div>
  )
}

export default LoginButtons