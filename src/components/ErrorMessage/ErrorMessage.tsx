interface ErrorMessageProps {
  errorTitle: string;
  errorCause: string;
}

const ErrorMessage = ({ errorTitle, errorCause }: ErrorMessageProps) => {
  return (
    <section id="error-message" data-cy="errorMessage">
      <p>😕</p>
      <h1>{errorTitle}</h1>
      <p>{errorCause}</p>
    </section>
  );
};

export default ErrorMessage;
