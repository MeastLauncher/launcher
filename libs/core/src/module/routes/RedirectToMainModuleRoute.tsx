import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

type RedirectToMainModuleRouteProps = {
    moduleRouteIdentifier: string;
};

export const RedirectToMainModuleRoute = ({
    moduleRouteIdentifier
}: RedirectToMainModuleRouteProps) => {
    const navigation = useNavigate();

    useEffect(() => {
        navigation(`/module/${moduleRouteIdentifier}`);
    }, []);

    return (
        <>
            <Outlet />
        </>
    );
};
