const LoginForm = () => {
  return (
    <div>
      <div>
        <h2>Iniciar sesión</h2>
        <form>
          <div>
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="user@gmail.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Escribe tu contraseña"
              required
            />
            <button type="button" aria-label="Mostrar contraseña">
              👁
            </button>
          </div>
          <button type="submit">Iniciar sesión</button>
        </form>
        <a href="#">¿Olvidaste tu contraseña?</a>
      </div>
      <div>
        <img
          src="../../../public/money-icome.svg"
          alt="Ilustración de finanzas"
        />
      </div>
    </div>
  );
};

export default LoginForm;
