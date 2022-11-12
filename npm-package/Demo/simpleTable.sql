--Favorite Music Data

--User Table
CREATE TABLE user_info (
  user_id serial NOT NULL, --serial definition
  user_name varchar (40) NOT NULL
  
  CONSTRAINT "user_info_pk" PRIMARY KEY ("user_id"))
WITH (
    OIDS = FALSE
);

--Fav Songs : connects with user ids

CREATE TABLE fav_song (
    fav_song_id serial NOT NULL,
    song_name varchar (40) NOT NULL,
    user_id integer REFERENCES user_info (user_id),
    CONSTRAINT "fav_song_pk" PRIMARY KEY ("fav_song_id")
)
WITH (
    OIDS = FALSE
);


--Fav Artists : connects with user ids

CREATE TABLE fav_movie (
    fav_movie_id serial NOT NULL,
    movie_name varchar (40) NOT NULL,
    user_id INTEGER REFERENCES user_info (user_id),
    CONSTRAINT "fav_movie_pk" PRIMARY KEY ("fav_movie_id")
);

/*
const user = {
    id: 101,
    email: 'jack@dev.com',
    personalInfo: {
        name: 'Jack',
        address: {
            line1: 'westwish st',
            line2: 'washmasher',
            city: 'wallas',
            state: 'WX'
        }
    }
}
*/


--ALTER TABLE STATEMENTS TO LINK TABLE IDS 
--ALTER TABLE _table_name ADD CONSTRAINT "primary_key_name" FOREIGN KEY ("user_id") REFERENCES table_name(key)

--COMMAND LINE FOR RUNNING IN TERMINAL
--psql -d postgres://hggnmyxh:yvicl-nyG6v9XTeNAEr5mJzaoCbfIn98@peanut.db.elephantsql.com/hggnmyxh -f simpleTable.sql