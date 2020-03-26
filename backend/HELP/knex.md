## knex
É um Query Builder.
    Conceitos: Driver: SELECT * FROM users
               Query Builder: table('users').select('*').where()
Nele há o suporte para diversos tipos de bancos de dados tais como pg, sqlite3, mysql, mysql2, oracledb, mssql
necessitando apenas a instalação via npm install <sqlite3>
Site para entender as funcionalidades: knexjs.org

npx knex init
    executa o knex, que por sua vez cria um arquivo raiz no projeto chamado *knexfile.js*
    contem as config de acesso ao banco de dados para cada ambiente da aplicação.
        Ambientes de 'development', 'staging' e 'production'
        Deve-se alterar o campo 'filename' no ambiente 'development'. 
        No caso foi alterado para o seguinte caminho:
            connection: {
            filename: './src/database/db.sqlite3'
            }

Para a criação de tabelas há a funcionalidade do knex chamada 'migrations'.
O migrations é uma forma de criar tabelas e manter um histórico das tabelas que foram criadas, alteradas, etc como em um controle de versão do banco de dados.
A vantagem é q com o uso em um time, quando uma nova tabela é criada, os outros desenvolvedores do time podem executar o código dos migrations e automaticamente as novas tabelas serão criadas.   
 Para criar nossa primeira migration:
    Adicionar ao *knexfile.js* o migrations com o caminho:
    development:{
        ...
        migrations:{
            directory:'./src/database/migrations'
        },
        useNellAsDefault: true,
    }

===
        Após isso executar no terminal:
            npx knex migrate:make <nome.da.migração>
        
        Ao executar será criada uma pasta no diretório descrito no *knexfile.js* com o método UP e DOWN
        No UP serão descritos os campos q serão criados:
            exports.up = function(knex) {
                return knex.schema.createTable('ongs', function (table){
                    table.string('id').primary();
                    table.string('name').notNullable();
                    table.string('email').notNullable();
                    table.string('whatsapp').notNullable();
                    table.string('city').notNullable();
                    table.string('uf', 2).notNullable();
                });
            };

        No DOWN serão desfeitos os campos caso algo de errado, normalmente deleta a tabela:
            exports.down = function(knex) {
                return knex.schema.dropTable('ongs');
            };

    Para criar a tabela execute no terminal:
        npx knex migrate:latest
    Após isso sera criado um arquivo db.sqlite3

===
Para criar nossa proxima migration execute no terminal:
    npx knex migrate:make create_incidents
Nele serão armazenados os casos da aplicação.
Segue a msm lógica da migration criada anteriormente... 
    Obs: para referenciar valores de uma tabela a outra: Tabela atual referencia tal valor de tal tabela
            exports.up = function(knex) {
                return knex.schema.createTable('ongs', function (table){
                    ...
                    table.foreign('ong_id').references('id').inTable('ongs');
                };
            };
Para criar a tabela incidents execute no terminal:
    npx knex migrate:latest 

=== 
Para desfazer a ultima tabela executada execute:
    npx knex migrate:rollback

===
Para saber todas as migrations q foram executadas:
    npx knex migrate:status