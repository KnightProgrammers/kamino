<h1 align="center">
    <a>
        <img src="./.github/assets/logo.png">
    </a>
</h1>

<p align="center">
    <a href="https://github.com/KnightProgrammers/kamino/actions/workflows/continuous-integration.yml"><img src="https://github.com/KnightProgrammers/kamino/actions/workflows/continuous-integration.yml/badge.svg" alt="Continuous Integration"></a>
    <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"></a>
</p>

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
docker compose up --detach --wait --build
```

------

## 💻 Development

### Server

> **Folder:** `/server`

**Install Dependencies**

```shell
npm install
```

**Start Server**

```shell
npm run dev-start
```

**Environment Vars**

| Var             | Type    | Default Value      | Description                                                                            |
|-----------------|---------|--------------------|----------------------------------------------------------------------------------------|
| `SECRET`        | String  | `THIS IS A SECRET` | Used to encrypt passwords on the database                                              |
| `DB_HOST`       | String  | `localhost`        | Database connection host                                                               |
| `DB_PORT`       | Number  | `3306`             | Database connection port                                                               |
| `DB_USER`       | String  | `root`             | Database connection user                                                               |
| `DB_PASSWORD`   | String  | `root`             | Database connection password                                                           |
| `DB_SCHEMA`     | String  | `testdb`           | Database name                                                                          |
| `PORT`          | Number  | `8080`             | Server port number                                                                     |
| `FORCE_DB_SYNC` | Boolean | `false`            | Force database structure creation                                                      |
| `DEBUG`         | Boolean | `false`            | Enables the debug mode                                                                 |
| `CORS_ORIGIN`   | String  | `*`                | Origin hosts list separated by comma, allowed to make requests (`*` means all allowed) |

------

## 📖 API Documentation

- [Postman Documentation](https://www.postman.com/knight-programmers/workspace/kamino/api/fdbf19a6-c37d-4269-9269-54cef3cabe08)

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/954922-25d49430-8525-47b6-8f34-d463a16a9fd5)

------

## 🗄️ Database

MySQL use as Database.

------

## 💾️ Backups

Backups are stored in Azure Containers data storage.

> **Folder:** `/backup-script`

**Automatic Executions**

- On every push to main

**Install Dependencies**

```shell
npm install
```

**Run Backup**

```shell
npm run backup
```

**Environment Vars**

| Var                 | Type   | Default Value | Description                  |
|---------------------|--------|---------------|------------------------------|
| `DB_HOST`           | String | `localhost`   | Database connection host     |
| `DB_PORT`           | Number | `3306`        | Database connection port     |
| `DB_USER`           | String | `root`        | Database connection user     |
| `DB_PASSWORD`       | String | `root`        | Database connection password |
| `DB_SCHEMA`         | String | `testdb`      | Database name                |
| `AZURE_ACCOUNT`     | String | `null`        | Azure account name           |
| `AZURE_ACCOUNT_KEY` | String | `null`        | Azure account secret key     |

------

## ⚖️ License

This project is licensed under the terms of the **MIT** license.

> You can check out the full license [MIT](./LICENSE) license.
