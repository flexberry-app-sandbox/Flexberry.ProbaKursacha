docker build --no-cache -f SQL\Dockerfile.PostgreSql -t probakursacha/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t probakursacha/app ../..
