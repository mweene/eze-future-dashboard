import InputWithLabel from "./InputWithLabel";
import SelectMultipleOptions from "./SeleteMultipleOptions";
import { X } from "lucide-react";

const AddNewClientModal = ({ onSubmit, onChange, onReveal }) => {
  return (
    <form
      className=" m-4 bg-white border border-gray-300 w-3/4 items-center absolute right-0 top-0 z-10 mt-16 shadow shadow-gray-300"
      onSubmit={onSubmit}
    >
      <section className="flex place-content-between p-4 bg-gray-50 border-b border-gray-200">
        <h2>Add New Client</h2>
        <button className="flex gap-1 items-center" onClick={onReveal}>
          <X size={17} />
          Close
        </button>
      </section>

      <div className="grid grid-cols-2 gap-4 m-4">
        <div className="grid gap-4 p-4 border border-gray-300">
          <section>
            <h3 className="capitalize text-base">buyer's information</h3>
            <div className="grid gap-2">
              <InputWithLabel
                id="name"
                phText="Full name"
                onChange={onChange}
                required={true}
              />
              <RadioOptions onChange={onChange} />
              <InputWithLabel
                id="nrc"
                phText="NRC e.g 226711/10/1"
                onChange={onChange}
              />
              <InputWithLabel
                id="phone"
                phText="Phone Number"
                onChange={onChange}
              />
              <InputWithLabel
                type="email"
                id="email"
                phText="Email"
                onChange={onChange}
              />
              <InputWithLabel
                id="address"
                phText="Residential Address"
                onChange={onChange}
              />
            </div>
          </section>

          <section>
            <h3 className="capitalize text-base">witness's information</h3>
            <div className="grid gap-2">
              <InputWithLabel
                id="witness.name"
                phText="Full Name"
                onChange={onChange}
              />
              <RadioOptions onChange={onChange} namePrefix="witness" />
              <InputWithLabel
                id="witness.nrc"
                phText="NRC e.g 226711/10/1"
                onChange={onChange}
              />
              <InputWithLabel
                id="witness.phone"
                phText="Phone Number"
                onChange={onChange}
              />
              <InputWithLabel
                id="witness.email"
                type="email"
                phText="Email"
                onChange={onChange}
              />
              <InputWithLabel
                id="witness.address"
                phText="Residential Address"
                onChange={onChange}
              />
              <InputWithLabel
                id="witness.relationship"
                phText="Relationship to Buyer"
                onChange={onChange}
              />
            </div>
          </section>
        </div>

        <div className="grid gap-4 p-4 border border-gray-300">
          <section>
            <h3 className="capitalize text-base">plot information</h3>
            <div className="grid gap-2">
              <InputWithLabel
                id="plotDetails.plotSize"
                phText="Plot Size e.g 20 x 20"
                onChange={onChange}
              />
              <InputWithLabel
                id="plotDetails.plotNumber"
                type="number"
                phText="Plot Number"
                onChange={onChange}
              />
              <InputWithLabel
                id="plotDetails.siteName"
                phText="Site Name e.g A, A+"
                onChange={onChange}
              />
              <InputWithLabel
                id="plotDetails.grandPrice"
                type="number"
                phText="Grand Price e.g 3500"
                onChange={onChange}
              />
              <InputWithLabel
                id="plotDetails.amountPaid"
                type="number"
                phText="Amount Paid e.g 1500"
                onChange={onChange}
              />
              <InputWithLabel
                id="plotDetails.balance"
                type="number"
                phText="Balance e.g 2000"
                onChange={onChange}
              />
              <SelectMultipleOptions
                label="Payment Status"
                name="plotDetails.paymentStatus"
                options={["fully paid", "partial", "pending", "overdue"]}
                onChange={onChange}
              />
              <SelectMultipleOptions
                label="Allocated Buyer"
                name="plotDetails.allocated"
                options={["Yes", "No"]}
                onChange={onChange}
              />
              <InputWithLabel
                id="plotDetails.allocationDate"
                type="date"
                phText="Allocation Date"
                onChange={onChange}
              />
              <InputWithLabel
                id="plotDetails.dateBought"
                type="date"
                phText="Date Bought"
                onChange={onChange}
              />
            </div>
          </section>

          <section>
            <h3 className="capitalize text-base">Buyers's documents</h3>
            <div className="grid gap-2">
              <InputWithLabel
                id="documents.nrcLink"
                phText="NRC Document Link"
                required={false}
                onChange={onChange}
              />
              <InputWithLabel
                id="documents.letterOfSaleLink"
                phText="Letter of Sale Link"
                required={false}
                onChange={onChange}
              />
              <InputWithLabel
                id="documents.landAgreementLink"
                phText="Land Agreement Link"
                required={false}
                onChange={onChange}
              />
              <InputWithLabel
                id="documents.allocationFormLink"
                phText="Allocation Form Link"
                required={false}
                onChange={onChange}
              />
              <InputWithLabel
                id="documents.authorizationLetterLink"
                phText="Authorization Letter Link"
                required={false}
                onChange={onChange}
              />
            </div>
          </section>
        </div>
      </div>

      <section>
        <button className="border border-gray-300 p-2" onClick={onReveal}>
          Close
        </button>
        <button className="border border-gray-300 p-2" type="submit">
          Submit
        </button>
      </section>
    </form>
  );
};

export default AddNewClientModal;

const RadioOptions = ({ onChange, namePrefix }) => {
  const fieldName = namePrefix ? `${namePrefix}.sex` : "sex";
  return (
    <div>
      <label htmlFor={fieldName}>
        <input
          type="radio"
          id={`${fieldName}-male`}
          name={fieldName}
          value="male"
          onChange={onChange}
        />
        Male
      </label>
      <label htmlFor={fieldName}>
        <input
          type="radio"
          id={`${fieldName}-female`}
          name={fieldName}
          value="female"
          onChange={onChange}
        />
        Female
      </label>
    </div>
  );
};
