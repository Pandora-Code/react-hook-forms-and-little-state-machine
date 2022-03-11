import { useRouter } from "next/router";
import { FC } from "react";
import { Box } from "theme-ui";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { Input } from "./components/Input";
import { Title } from "./components/Title";

export const FormStepOne: FC = () => {
    const router = useRouter()

    const redirectCreateAccountStepTwo = () => {
        const path = router.pathname
        router.push(path + '/step-two')
    }

    return <Card>
    <Title type="secondary">Create Account</Title>
    <Box>
        <Input label="First Name" errorMessage="Nome do usuário está incorreto"/>
        <Input label="Last Name" errorMessage="Nome do usuário está incorreto"/>
        <Input label="Age Name" errorMessage="Nome do usuário está incorreto"/>
    </Box>
    <Button sx={{width: '100%'}} onClick={redirectCreateAccountStepTwo}>Continuar</Button>
</Card>
}