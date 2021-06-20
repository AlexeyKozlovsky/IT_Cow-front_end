import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";


const botName = "Электронный доктор";

const config = {
    botName: "Электронный доктор",
    describe: "Диалог",
    customComponents: {
        // Replaces the default header
       header: () => <div>Цифровой доктор</div>
     },
    initialMessages: [
        createChatBotMessage(
        `Здравствуйте, я ваш ${botName}. Я попытаюсь помочь вам с первичной диагностикой: порекомендую вам доктора или лекарственный препарат`
        ),
        createChatBotMessage(
        "Расскажите, что вас беспокоит. Может что-то болит?",
        {
            withAvatar: false,
            delay: 500,
            widget: "overview",
        }
        ),
    ]
};

export default config;