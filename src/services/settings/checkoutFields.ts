import { db } from "../../lib/mongo.ts"
import parse from "../../lib/parse.ts"

class CheckoutFieldsService {
  getCheckoutFields() {
    return db
      .collection("checkoutFields")
      .find()
      .toArray()
      .then(fields =>
        fields.map(field => {
          delete field._id
          return field
        })
      )
  }

  getCheckoutField(name) {
    return db
      .collection("checkoutFields")
      .findOne({ name })
      .then(field => this.changeProperties(field))
  }

  updateCheckoutField(name, data) {
    const field = this.getValidDocumentForUpdate(data)
    return db
      .collection("checkoutFields")
      .updateOne(
        { name },
        {
          $set: field,
        },
        { upsert: true }
      )
      .then(res => this.getCheckoutField(name))
  }

  getValidDocumentForUpdate(data) {
    if (Object.keys(data).length === 0) {
      return new Error("Required fields are missing")
    }

    const field = {}

    if (data.status !== undefined) {
      field.status = parse.getString(data.status)
    }

    if (data.label !== undefined) {
      field.label = parse.getString(data.label)
    }

    if (data.placeholder !== undefined) {
      field.placeholder = parse.getString(data.placeholder)
    }

    return field
  }

  changeProperties(field) {
    if (field) {
      delete field._id
      delete field.name
    } else {
      return {
        status: "required",
        label: "",
        placeholder: "",
      }
    }

    return field
  }
}

export default new CheckoutFieldsService()
