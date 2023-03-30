-React : framework / biblioteca para criar interfaces

-Vite:  
        -set up para trabalhar com react, já com as configurações necessárias.
        -criar projeto react: necessita de um set up, para não precisar configurar tudo manualmente o que é inviável.
        -terminal: npm create vite@latest
-Creat react app: outro set up bastante utilizado.




*SPA do React.
    -O react tem aplicação de spa, por isso que ao criar o projeto, uma div com id=root está no body do html, pois o que ocorre ao variar uma página é alterar o contudo interno dessa div, não é de fato indo para outra página, isso faz a aplicação ser mais performatica, pois não precisa recarregar todo o html ao gerar qualquer comando.



*Arquivo jsx:

        -São puramente funções que são exportadas e importadas no main.jsx, onde está sendo inserido o conteudo dentro da div id=root padrão.
        -Cada função possui um return que retorna apenas uma tag, contudo, dentro dela, podem existir infinitas tags:
                *envolvimento da div: englobar tudo em um div, caso precise estilizar a div, por exemplo
                *fragment: <>  </>, será retornado assim como a div. Possui as tags dentro, contudo, nenhum impacto visual.


*Css-in-js
        -css em javascript: styled components
        -styled components(biblioteca): 
                %Ao escrever css dentro de js, aproveita-se todos os recursos que o react/js ofere para trabalhar com componentes; 
                %Gera um arquivo css minificado.     

                %Vantagens: 
                        %fornece nomes de classes a prova de colisão
                        %Gera css que o navegador tenha suporte automaticamente
                        %Desempenho
                        %Estilos dinâmicos
                        %Facilita manutenção
                        %Boas práticas




 LÓGICA NA CONSTRUÇÃO DA ESTRUTURA DO PROJETO:
    -Criando projeto: dentro da pasta que ficará o projeto ====> npm create vite@latest 
        Criará as pastas específicas, basicamente, já configuradas para construção do projeto, 
        como node_modules; index.html, package.json, arquivos jsx, etc.

    -Recomenda-se que as pastas sejam organizadas da seguinte maneira:
       
       && folder styles: possuirá estilos globais do projeto
            -um diretório para estilos globais, utilizando CreateGlobalStyles de styled-components, de algum modo, apenas exportar a função criada dentro do arquivo, já aplica o css-in-js no projeto
                ***ESTA FUNÇÃO DEVERÁ SER ADICIONADA DENTRO DE main.jsx, assim como a página que está sendo inserida dentro da   div id="root"
        
            -outro diretório como theme.js, que pode possuir variações de cor, por exemplo
                Para utilização desse tema:IMPORTAR ThemeProvider de styled-components e emblobar todas as outras funções que estão sendo inseridas da div id="root"
                    
                    <ThemeProvider theme={theme}>   
                        <funcoes>
                    </ThemeProvider>  


                    ====> importação e desestruturação de "theme" lá de theme.js, para conseguirmos acessar,dentro de uma variável criada com styled-components, esse objeto no projeto inteiro sem precisar ficar importando.
    
        
        && folder pages: possúira das pastas de cada página separadamente
            -Dentro de cada página xistirá:
                 *Um arquivo index.jsx, responsável por criar a função que ser importada e utilizada la no main.jsx, na inserção de conteúdo na div id="root".

                 *Um arquivo styles.js, que, por meio de styled-components, será criada uma variável(a tag html já é definida aqui) com estilizações já definidas, que podem serem inseridas no arquivo .jsx

        && folder components: é extremamente importante para definir estilo para componentes que serão utilizados na aplicação inteira, por exemplo: 
            Temos vários buttons na app 
                Todos possuem , mesmo border-radius e mesma cor etc

        , Assim, podemos criar um folder "Button" dentro de "components" e assim, como nas "pages", por exemplo, criamos uma função jsx para ser utilizada dentro de algum outro arquivo .jsx. Assim, independente de quantas páginas tivermos na aplicação, podemos utilizar esse padrão de botão em todas, sem precisar fazer nada além de adiciona-lo na estruturado arquivo .jsx da página desejada
    
    

INFORMAÇÕES GERAIS


    
    -div id="root" no body no index.html
        O react faz SPA automaticamente, ou seja, precisa-se de uma div dentro do body do html, onde os conteudos específicos serão inseridos. Assim, não precisa-se criar várias pagínas ou gerando carregamentos de html, já que apenas o conteúdo de dentro da div que está sendo apresentado.
    
    

    -styled-components: biblioteca utilizada para criar styles com javascript, basta importa-la no arquivo.
        Torna capaz criar-se variáveis que contém css sendo aplicado com js, com uma sintaxe específica desta biblioteca,
        lembrando que esta varíavel(geralmente chamada de Container) pode ser adicionada nos arquivos .jsx 
    

    
    -Arquivos jsx: Possuirão funções que retornam: APENAS UMA tag , diretamente(h1, por exemplo), uma função importada criada em outro arquivo jsx, ou uma variável importada criada com utilização de styled-components.
        O retorno de apenas uma tag, seja ela uma tag html, função, ou varíavel, não impede de englobar infinitas varíaveis dentro desta única que está sendo retornada. Desta forma, podemos criar variáveis, utilizando styled-components, que já contém estilização no arquivo .js respectivo e utilizado para englobar todas as funções, ou tags que foram criados em outros arquivos do projeto. Isso ficará mais claro quando chegarmos em "componentes".

    
    -Arquivo main.jsx: 
        É criado dentro de src, automaticamente pelo set up VITE. É nele que acessa-se a div id="root" e 
        adiciona-se o conteúdo dentro dela.Ou seja, aqui onde serão importadas
            *todas as bibliotecas react: 
                import React from 'react'
                import ReactDOM from 'react-dom/client'
            
            *biblioteca provedora de tema:
                import {ThemeProvider} from 'styled-components'
            
            *GlobalStyles, criada em um arquivo .js com a biblioteca styled-components. Este arquivo aplica estilos gerais para todos o projeto
                import GlobalStyles from './styles/global'

    -Propriedades:
        Nos arquivos .jsx, podemos colocar propriedades nas variáveis inseridas dentro do return, exemplo: 
            return(
                <Container>   
                    <Button title="Login"/> 
                </Container>  
    )

        Neste caso aqui, estou utilizando uma função Button, importada de outro arquivo .jsx. Posso adicionar propriedades nela aqui onde ela está sendo executada, e lá no arquivo da construção de Button, posso acessar essas propriedades, da seguinte maneira:

            Essas propriedades ficam AUTOMATICAMENTE salvas em um objeto react chamado "props", ou seja, se acessarmos a construção da função "Button"  no arquivo index.jsx, podemos desestruturar esse objeto "props" e utilizar as propriedades: 

                    export function Button({title}){
                        return(
                            <Container >
                                {title}
                            </Container>
                        )
                    }     

                   Ao adicionar "title" aqui dentro, lá no arquivo .jsx que a função Button está sendo executada, Details.index.jsc, neste caso, as configurações definidas aqui nesta função, são levadas em consideração automaticamente, ou seja, ele já irá reconhecer, tanto <Container>, criado com styled-components, quanto a propriedade capturada, assim, cada button possuirá a propriedade que foi passa na EXECUÇÃO de sua função, dentro de Datails, neste caso, cada uma possuirá o título passado.    



BIBLIOTECAS:

-react-icons:
 https://react-icons.github.io/react-icons/  -site
 npm install react-icons --save             -instalação da biblioteca.

-react-router-dom: fazer rotas => npm install react-router-dom 

-vite: set-up react => npm create vite@latest
-styled-components=>

Construção das rotas:

-É interessante que se separe as rotas em:
    $ROTAS DE AUTENTICAÇÃO    
        *rotas antes do usuário estar logado(tela de login e de criação de usuário)
        
        
    &ROTAS DA APLICAÇÃO
    *rotas depois do usuário estar logado.
            Assim, garante-se que o usuário não vai acessar telas que não fazem sentido.    



-Importações:

    *import{BrowserRouter} from "react-router-dom"
        &BrowserRouter: função inserida no arquivo index.jsx dentro do folder "routes", onde será construida uma função
                        que possui Routes e Route, exemplo:
                            <BrowserRouter>
                                <Routes>
                                    <Route
                                    path="x" 
                                    element={<Function da page>}
                                    />
                                </Routes>
                            </BrowserRouter>
                            
                            
    *import{Routes,Route}from "react-router-dom"; 
        
        &Routes: Functions jsx que engloba as Functions Route jsx
        &Route: função jsx  que possui as propriedades:
            $ path="/diretório que deseja como condição para inserir a page desejada dentro da div root " 
            $ element={<função jsx que possui a página desejada.>}

    *import{Link}from "react-router-dom"; 
        &Link: é uma função jsx que constrói um html com a tag "a"(pode-se acessar seu estilo, chamando a tag "a")
            $ Propriedade "to"= inserir na função jsx de <Link> para inserir a rota no navegador ao clicar.Assim,
                    ativa-se as funções pre-setadas nos <Routes path="">

        &Formas de uso :
            $englobar o <Link> em volta do button ou tag "a" desejada
            $construir a constante em sí utilizando Link como tag, exemplo:

                    export const Container=styled(Link){
                        
                    }







 
    
    


    