"use client";
import React from "react";
import styles from "./LoginPage.module.css";
import Image from "next/image";
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
import { useRouter } from "next/navigation";
import { routes } from "@/shared/config/routes";

export default function LoginPage() {
  const router = useRouter();

  return (
    <section className={styles.login_page}>
      <div className={styles.login_page_left}>
        <div className={styles.login_page_left_content}>
          <div className={styles.login_page_left_content_logo}>
            <Image
              className={styles.login_page_left_content_logo_image}
              src="/shared/logo.png"
              alt="logo"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.login_page_left_content_form}>
            <Input
              label="Correo electrónico"
              placeholder="name@gmail.com"
              type="text"
              value=""
              onChange={() => {}}
            />
            <Input
              label="Contraseña"
              placeholder="********"
              type="password"
              value=""
              onChange={() => {}}
            />
            <Button
              variant="outline"
              onClick={() => router.push(routes.dashboard)}
            >
              Iniciar sesión
            </Button>
            <Button
              variant="ghost"
              onClick={() => router.push(routes.register)}
            >
              Registrarse
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.login_page_right}></div>
    </section>
  );
}
