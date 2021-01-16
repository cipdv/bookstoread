create table books (
    id bigserial not null primary key,
    title varchar (100) not null,
    genre varchar (50) not null,
    recommender varchar (50),
    number_of_pages smallint,
    price smallint
);

    insert into books (title, genre, number_of_pages, price) values ('Braiding Sweetgrass', 'Indigenous', 300, 20) returning *;

    