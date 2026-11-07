# HOW TS WORKS

1. TS Code

Original TypeScript source

2. Lexer

Breaks code into tokens

3. Parser

Creates AST

4. AST(Abstract Syntax Tree)

Structured representation of code

5. Binder

Connects declarations and references

6. Checker

Checks types and errors

7. Emitter

Generates output files

8. JS / Source Maps

Final generated output


Read → Break → Understand → Connect → Check → Generate.

Component                  Remember it as
--------------------------------------------------
TS Code                    Original code
Lexer                      Breaks code into tokens
Parser                     Understands code structure
AST                        Tree representation
Binder                     Connects declarations
Symbol Tables              Stores symbol information
Parent Pointers            Tracks relationships
Flow Nodes                 Tracks changes in values and types
Checker                    Checks types and errors
Emitter                    Generates output
JS / TS / MAP              Output and source-related files
--------------------------------------------------


