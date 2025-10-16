# language: pt
Funcionalidade: Gerenciar Pets
    Como usuário do sistema
    Eu gostaria de gerenciar o cadastro de pets
    Para que possa adicionar, visualizar e remover informações sobre os animais

    Cenário: Visualização da lista de pets
        Dado que o usuário acessa a página inicial
        Quando ele clica no link "Meus Pets"
        Então o sistema deve exibir a lista de pets cadastrados
        E deve mostrar o nome, idade e tutor de cada pet

    Cenário: Cadastro de pet com sucesso
        Dado que o usuário acessa a página inicial
        Quando ele clica no link "Cadastrar"
        E preenche o campo "tutor" com "Carlos Silva"
        E preenche o campo "endereco" com "Rua das Palmeiras, 100"
        E preenche o campo "telefone" com "35999887766"
        E preenche o campo "nome" com "Rex"
        E preenche o campo "idade" com "3"
        E preenche o campo "raca" com "Pastor Alemão"
        E preenche o campo "observacoes" com "Dócil e brincalhão"
        E clica no botão "Cadastrar Pet"
        Então o sistema deve exibir a mensagem "Pet cadastrado com sucesso!"
        E o pet "Rex" deve aparecer na lista de pets

    Cenário: Remoção de pet com sucesso
        Dado que o usuário acessa a página inicial
        Quando ele clica no link "Meus Pets"
        E existe um pet chamado "Bolacha" na lista
        Quando ele clica no botão de remover do pet "Bolacha"
        E confirma a remoção
        Então o sistema deve remover o pet "Bolacha" da lista
        E o pet "Bolacha" não deve mais aparecer na lista de pets
