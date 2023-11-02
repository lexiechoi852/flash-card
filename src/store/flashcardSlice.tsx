import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FlashcardSet } from "../types/flashcard";

export interface FlashcardState {
    flashcards: FlashcardSet[]
}

const initialState: FlashcardState = {
    flashcards: [
        {
            id: "c3bc9705-e0b8-4efe-93aa-55e3074f1fb8",
            topic: "Spring boot interview",
            cards: [
                {
                    id: "5515124d-dfcc-4ddd-86cf-1a2817f5151f",
                    question: "What is Spring Boot?",
                    answer: "Spring Boot is an open-source Java framework that simplifies the development of Spring applications by providing ready-to-use configurations and convention-over-configuration approaches."
                },
                {
                    id: "be398d2a-664a-450e-99bb-a6077c765c61",
                    question: "What are the advantages of using Spring Boot?",
                    answer: "Some advantages of using Spring Boot include:"
                },
                {
                    id: "0ddeb30d-74a6-4fb7-946c-2f2ae4cb6bc6",
                    question: "What is the difference between Spring and Spring Boot?",
                    answer: "Spring is a framework that provides various modules for different purposes, while Spring Boot is an opinionated framework built on top of Spring to simplify the development process."
                },
                {
                    id: "a7f1c2a6-a934-449c-8a5d-b045e3cd54b6",
                    question: "What is the purpose of the @SpringBootApplication annotation?",
                    answer: "The @SpringBootApplication annotation is used to indicate the main class of a Spring Boot application. It enables auto-configuration and component scanning."
                },
                {
                    id: "387e3810-6503-4b3a-a97c-485a5e5414ae",
                    question: "What is Spring Boot Actuator?",
                    answer: "Spring Boot Actuator is a subproject of Spring Boot that provides endpoints and tools for monitoring and managing the application at runtime. It helps in collecting metrics, health checks, and more."
                },
                {
                    id: "9d9e8aeb-fd1e-423c-8998-90c5a73e4938",
                    question: "How can you configure a database connection in Spring Boot?",
                    answer: "You can configure a database connection in Spring Boot by providing the necessary properties in the application.properties or application.yml file. Alternatively, you can use annotations, such as @DataSource, @EnableJpaRepositories, etc."
                },
                {
                    id: "bc244870-2ea9-48d1-8108-59cac735d405",
                    question: "What is Spring Boot Starter?",
                    answer: "Spring Boot starters are a set of dependency descriptors that help in simplifying the dependency management process. They contain a predefined set of dependencies related to a specific functionality (e.g., spring-boot-starter-web includes dependencies for building web applications)."
                },
                {
                    id: "35d73324-7ee3-47d7-bdc0-349beb11b264",
                    question: "How can you handle exceptions in Spring Boot?",
                    answer: "Exceptions can be handled in Spring Boot by using the @ExceptionHandler annotation to define exception handlers within a controller or by implementing an ExceptionHandler class."
                },
                {
                    id: "cfe3317a-61ef-4d20-ad54-a58d89b5874d",
                    question: "What is Spring Boot DevTools?",
                    answer: "Spring Boot DevTools is a set of development-time tools that provides automatic restart, live reload, and other enhancements for faster development. It is useful for improving the development experience."
                },
                {
                    id: "05ee1a76-df48-4631-a1e9-4e1b74acb09c",
                    question: "How can you override the default Spring Boot configuration?",
                    answer: "You can override the default Spring Boot configuration by providing your own configuration properties or by using property files (application.properties or application.yml) in your project and overriding the values as per your requirement."
                }
            ]
        }, 
        {
            id: "3113325e-d43d-4583-9904-294f8b81d076",
            topic: "Javascript interview",
            cards: [
                {
                    id: "7a384b11-9bd8-4bfc-9860-5568522550c6",
                    question: "What is JavaScript?",
                    answer: "JavaScript is a high-level programming language used for making web pages interactive."
                },
                {
                    id: "99cdf35c-0400-41be-ae0c-edf2bad96042",
                    question: "What are the different data types in JavaScript?",
                    answer: "JavaScript supports six primitive data types: string, number, boolean, null, undefined, and symbol. It also supports object data type."
                },
                {
                    id: "8a8cf11f-d65e-4591-9cef-9e76b88ab1ae",
                    question: "What is the difference between 'null' and 'undefined' in JavaScript?",
                    answer: "'null' is an assignment value that represents no value or empty value. 'undefined' means a variable has been declared but has not been assigned a value."
                },
                {
                    id: "794960d4-871d-4171-bd4a-8e7629f60bdc",
                    question: "What is hoisting in JavaScript?",
                    answer: "Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase."
                },
                {
                    id: "3ed25582-0bd6-4bfc-b85b-48c6c796fd85",
                    question: "What is the difference between 'let', 'const', and 'var'?",
                    answer: "'let' and 'const' are block-scoped, whereas 'var' is function-scoped. 'let' allows reassignment, and 'const' declares a constant variable."
                },
                {
                    id: "701352d4-21a4-4147-85e6-770803253e69",
                    question: "What are closures in JavaScript?",
                    answer: "Closures are functions that have access to variables from their outer function even after the outer function has returned."
                },
                {
                    id: "7a1a793c-4d97-4065-957a-4bc631421109",
                    question: "What is the purpose of 'this' keyword in JavaScript?",
                    answer: "'this' refers to the object on which a method is being called, or the object that a function is executed in the context of."
                },
                {
                    id: "db8b3a9a-31db-4d8f-808e-3a9551dff647",
                    question: "What is event delegation in JavaScript?",
                    answer: "Event delegation is a technique where you attach a single event listener to a parent element, and let the events bubble up from the child elements to the parent."
                },
                {
                    id: "283f132a-3e3d-4d0f-914e-3b1db96ab285",
                    question: "What is the difference between '==' and '===' in JavaScript?",
                    answer: "'==' performs type coercion and checks for equality, whereas '===' compares both value and type without any type coercion."
                },
                {
                    id: "6c487673-fb27-46c6-8725-5aedef82a61c",
                    question: "Explain the concept of callback functions in JavaScript.",
                    answer: "Callback functions are asynchronous functions that are passed as arguments to other functions and are executed after a particular task is completed."
                }
            ]
        }
    ],
};

export const flashcardSlice = createSlice({
  name: "flashcard",
  initialState,
  reducers: {
    generateFlashcard: (state, action: PayloadAction<FlashcardSet>) => {
      state.flashcards =[...state.flashcards, action.payload];
    },
  },
});

export const { generateFlashcard } = flashcardSlice.actions;

export default flashcardSlice.reducer;
