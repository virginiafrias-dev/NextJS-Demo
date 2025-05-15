"use client";

import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SubmitButton from "../form/SubmitButton";
import InputText from "../form/InputText";
import httpExternalApi from "@/services/common/http.external.service";
import authAPI from "@/services/auth/auth.service";
import { AccessDeniedError } from "@/services/common/http.errors";
import { useState } from "react";
import { useRouter } from "next/navigation";

type FormData = {
  username: string;
  password: string;
};

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const LoginForm = () => {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const methods = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: FormData) => {
    setServerError(null);
    try {
      const loginRespone = await authAPI.login(data.username, data.password);
      console.log(JSON.stringify(loginRespone));
      router.push("/");
    } catch (error) {
      if (error instanceof AccessDeniedError) {
        setServerError("Tus credenciales son inválidas");
      } else {
        setServerError("Ha ocurrido un error. Intente mas tarde");
      }
    }
    return false;
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputText
          label="Nombre de usuraio:"
          fieldName="username"
          placeholder="Anakin29"
          type="text"
        />

        <InputText
          label="Contraseña:"
          fieldName="password"
          placeholder="********"
          type="password"
        />

        <SubmitButton
          label="Iniciar Sesión"
          onSubmit={onSubmit}
          styles="mt-4"
        />
        {serverError && <div className="mt-4 text-red-600">{serverError}</div>}
      </form>
    </FormProvider>
  );
};

export default LoginForm;
