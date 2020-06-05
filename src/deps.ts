import { createRequire } from "https://deno.land/std/node/module.ts"

const require = createRequire(import.meta.url)

export const express = require("express")
export const apolloServerExpress = require("apollo-server-express")
export const awsSdk = require("aws-sdk")
// export const bcrypt = require("bcrypt");
export const bcrypt = "https://deno.land/x/bcrypt/mod.ts"
export const bodyParser = require("body-parser")
export const cezerin2Client = require("cezerin2-client")
export const chartJs = require("chart.js")
export const cookieParser = require("cookie-parser")
export const cryptr = require("cryptr")
export const esm = require("esm")
export const expressJwt = require("express-jwt")
export const formidable = require("formidable")
export const fsExtra = require("fs-extra")
export const handlebars = require("handlebars")
export const helmet = require("helmet")
export const husky = require("husky")
export const jsonwebtoken = require("jsonwebtoken")
export const jwt = require("jsonwebtoken")
export const lodash = require("lodash")
export const lruCache = require("lru-cache")
export const lscache = require("lscache")
export const minio = require("minio")
export const moment = "https://deno.land/x/moment/moment.ts"
// export const mongodb = require("mongodb")
export const mongodb = "https://deno.land/x/mongo@v0.7.0/mod.ts"
export const nodeFetch = require("node-fetch")
export const nodemailer = require("nodemailer")
export const nodemailerSmtpTransport = require("nodemailer-smtp-transpor")
export const queryString = require("query-string")
export const responseTime = require("response-time")
export const sitemap = require("sitemap")
export const slug = require("slug")
export const stripe = require("stripe")
export const uaParserJs = require("ua-parser-js")
export const winston = require("winston")
export const ws = "https://deno.land/x/websocket/mod.ts"
export const fs = require("fs")
export const path = require("path")
export const childProcess = require("child-process")
export const crypto = require("crypto")
export const url = require("url")
