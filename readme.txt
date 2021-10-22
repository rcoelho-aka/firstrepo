Hello World!

Para executar a aplicação:
   node index.js


NOTAS:

- Cada grupo deverá desenvolver a funcionalidade num feature branch chamado "GxFy" (onde x é o numero do grupo e y o numero da feature)
- Todas as mensagens de commit devem ser precedidas de "GxFy "
- Quando concluído, cada grupo deverá fazer um Pull Request para a branch develop
- Os vários grupos deverão manter-se atentos se existem Pull Requests para rever
- Qual quer pessoa pode rever o PR e aprovar se ok
- Quando o PR tiver pelo menos duas aprovações, os autores podem então fazer merge para develop
- O merge para develop deverá ser feito com a estratégia "merge commit"
- A branch original deve ser apagada

Regras Code Review:
- Validar que o código cumpre os requisitos pedidos e não quebra outras funcionalidades existentes
- Validar que a feature branch não tem conflitos com a develop
- Validar que a feature branch não tem merge commits 
  (se for necessário levar as alterações de develop para a feature branch, deve ser feito utilizando fast-forward)
- Validar o formato dos nomes das branches e das mensagens de commit

Deve ser seguida estas regras de formatação para o código:
- usar aspas 'simples' em vez de "duplas" para strings
- a linha não deverá terminar com ';'
- os objetos devem ser formatados com um espaço entre o nome/valor da propriedade e a chaveta { }
    exemplo: { name: 'Ricardo Coelho' }

Eventuais correções devem ser pedidas aos autores (usar a opção existente no github) e não feitas pelo reviewer



Happy coding!
