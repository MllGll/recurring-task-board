import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    debug: true,
    fallbackLng: "en",
    resources: {
        en: {
            translation: {
                "title": "Recurring Task Board",
                "developedBy": "Developed by",
                "newTask": "New Task...",
                "delete": "Delete",
                "schedule": "Fix",
                "check": "Check",
                "today": "Today",
                "week": "Week",
                "month": "Month",
                "year": "Year"
            }
        },
        pt: {
            translation: {
                "title": "Quadro de Atividades",
                "developedBy": "Desenvolvido por",
                "newTask": "Nova Atividade...",
                "delete": "Excluir",
                "schedule": "Fixar",
                "check": "Marcar",
                "today": "Hoje",
                "week": "Semana",
                "month": "Mês",
                "year": "Ano"
            }
        }
    }
});

export default i18n;
