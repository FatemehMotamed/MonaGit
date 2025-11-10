function Header(){
    const isLogin = true
    // if (isLogin) {
    //     return (<button>Login</button>);
    // }
    // else return (<button>Dashboard</button>);

   return (
    <header>
        {/* { isLogin ? <button>Login</button> : <button>Dashboard</button>} */}
        { isLogin ? <><button>Dashboard</button> <button>cart</button> </> : <button>Login</button>}
        {isLogin && <button>basket</button>}
    </header>
     
    );


}

export default Header