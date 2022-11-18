CREATE TABLE user_info1 (
  user_id serial NOT NULL, --serial definition
  user_name varchar (40) NOT NULL,
  song_name varchar (40) NOT NULL,
  movie_name varchar (40) NOT NULL,
  CONSTRAINT "user_info_pk1" PRIMARY KEY ("user_id"))
WITH (
    OIDS = FALSE
);


--psql -d postgres://hggnmyxh:yvicl-nyG6v9XTeNAEr5mJzaoCbfIn98@peanut.db.elephantsql.com/hggnmyxh -f user_data.sql