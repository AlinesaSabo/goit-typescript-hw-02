import { Formik, Form, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";
import { CiSearch } from "react-icons/ci";

type SearchBarProps = {
  onSubmit: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const initialValues = {
    query: "",
  };

  const handleSubmit = (values: { query: string }) => {
    if (values.query.trim() === "") {
      toast.error("Please enter a search term.");
      return;
    }
    onSubmit(values.query);
  };

  return (
    <div>
      <header>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {() => (
            <Form className={s.form}>
              <Field
                className={s.input}
                type="text"
                name="query"
                placeholder="Search images and photos"
              />
              <button type="submit" className={s.button}>
                <CiSearch />
              </button>
            </Form>
          )}
        </Formik>
        <Toaster />
      </header>
    </div>
  );
};

export default SearchBar;
