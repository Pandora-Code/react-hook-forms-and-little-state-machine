import { useRouter } from "next/router";
import { FC } from "react";
import { Box } from "theme-ui";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { Input } from "./components/Input";
import { Title } from "./components/Title";

export const FormStepTwo: FC = () => {
    const router = useRouter()

    const redirectSuccessPage = () => {
        const createAccountPath = '/' + router.pathname.split('/')[1]        
        router.push(createAccountPath + '/success')
    }

    return <Card>
    <Title type="secondary">Create Account</Title>
    <Box>
        <Input label="User Name" errorMessage="Nome do usuário está incorreto"/>
        <Input label="Password" errorMessage="Nome do usuário está incorreto"/>
        <Input label="Confirm password" errorMessage="Nome do usuário está incorreto"/>
    </Box>
    <Button sx={{width: '100%'}} onClick={redirectSuccessPage}>Criar conta</Button>
</Card>
}