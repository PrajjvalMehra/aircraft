import React from 'react';
import { t } from '../translation';
import { PageLink, PageRedirect, TabRoutes } from '../Utils/routing';
import { Navbar } from '../UtilComponents/Navbar';
import { ServicesPage } from './Pages/ServicesPage';
import { PushbackPage } from './Pages/PushbackPage';
import { Payload } from './Pages/Payload/Payload';
import { Fuel } from './Pages/Fuel/Fuel';

export interface StatefulButton {
    id: string,
    state: string,
    callBack,
    value: number,
}

export const Ground = () => {
    const tabs: PageLink[] = [
        { name: 'Services', alias: t('Ground.Services.Title'), component: <ServicesPage /> },
        { name: 'Fuel', alias: t('Ground.Fuel.Title'), component: <Fuel /> },
        { name: 'Payload', alias: t('Ground.Payload.Title'), component: <Payload /> },
        { name: 'Pushback', alias: t('Ground.Pushback.Title'), component: <PushbackPage /> },
    ];

    return (
        <div className="transform-gpu">
            <div className="relative mb-4">
                <h1 className="font-bold">{t('Ground.Title')}</h1>
                <Navbar
                    className="absolute top-0 right-0"
                    tabs={tabs}
                    basePath="/ground"
                />
            </div>
            <PageRedirect basePath="/ground" tabs={tabs} />
            <TabRoutes basePath="/ground" tabs={tabs} />
        </div>
    );
};
