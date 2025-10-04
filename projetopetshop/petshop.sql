CREATE TABLE pets (
    id INTEGER  PRIMARY KEY ,
    nome TEXT,
    idade INTEGER,
    raca TEXT,
    vacinas boolean,
    dono TEXT
);

SELECT * FROM pets

INSERT INTO pets (nome, idade, raca, vacinas, dono) VALUES
('Rex', 5, 'Labrador', true, 'João'),
('Maju', 3, 'viralata', false, 'Jorge'),
('Toby', 2, 'Bulldog', true, 'Carlos'),
('Laila', 4, 'Beagle', true, 'Mariana'),
('Max', 1, 'German Shepherd', false, 'Pedro');

INSERT INTO pets (nome, idade, raca, vacinas, dono) VALUES
('Luna', 2, 'Poodle', true, 'Ana'),
('Charlie', 6, 'Boxer', false, 'Lucas'),
('Bella', 3, 'Dachshund', true, 'Sofia'),
('Rocky', 4, 'Rottweiler', true, 'Gabriel'),
('Mia', 1, 'Chihuahua', false, 'Isabela');
