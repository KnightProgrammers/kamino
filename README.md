<h1 align="center">
    <a>
        <img src="./.github/assets/logo.png">
    </a>
</h1>

<p align="center">
  <i align="center"></i>
</p>

------
## 🧰 Requirements

**Supported operating systems**:

- Ubuntu LTS/Debian 9.x
- CentOS/RHEL 8
- macOS Mojave
- Docker

**Node:**
 - Recommended: 16.x
 - Minimum: 14.x

**MySQL:**
- Recommended: 8.0
- Minimum: 5.7.8

------
## 🚀 Getting Started

```shell
docker compose up --detach --wait
```

------
## 💻 Development

### Server

>**Folder:** `/server` 

**Install Dependencies**
```shell
npm install
```

**Start Server**
```shell
npm run dev-start
```
**Environment Vars**

| Var             | Type    | Default Value       | Description                                                                            |
|-----------------|---------|---------------------|----------------------------------------------------------------------------------------|
| `SECRET`        | String  | `THIS IS A SECRET`  | Used to encrypt passwords on the database                                              |
| `DB_HOST`       | String  | `localhost`         | Database connection host                                                               |
| `DB_PORT`       | Number  | `3306`              | Database connection port                                                               |
| `DB_USER`       | String  | `root`              | Database connection user                                                               |
| `DB_PASSWORD`   | String  | `root`              | Database connection password                                                           |
| `DB_SCHEMA`     | String  | `testdb`            | Database name                                                                          |
| `PORT`          | Number  | `8080`              | Server port number                                                                     |
| `FORCE_DB_SYNC` | Boolean | `false`             | Force database structure creation                                                      |
| `CORS_ORIGIN`   | String  | `*`                 | Origin hosts list separated by comma, allowed to make requests (`*` means all allowed) |


------
## 🗄️  Database

MySQL use as Database.

------
## ⚖️  License

This project is licensed under the terms of the **MIT** license.

>You can check out the full license [MIT](./LICENSE) license.
