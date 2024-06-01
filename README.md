## 如何在 localhost 安裝與測試：

1. Clone the repo

2. Install dependencies

```bash
yarn install
```

3. Create a `.env.local` file in the root of the project and add a valid Postgres URL. To get a Postgres URL, follow the instructions [here](https://ric2k1.notion.site/Free-postgresql-tutorial-f99605d5c5104acc99b9edf9ab649199?pvs=4). Besides, get google cloud's id and secret from google clout website. Below is the example:

```bash
POSTGRES_URL=postgresql://HankWu37878:0pZn8WfrVqMI@ep-dawn-sun-82751177.ap-southeast-1.aws.neon.tech/point3?sslmode=required
NEXT_PUBLIC_BASE_URL=http://localhost:3000

```

4.  Run the migrations

```bash
yarn migrate
```

5. Start the app

```bash
yarn dev
```
