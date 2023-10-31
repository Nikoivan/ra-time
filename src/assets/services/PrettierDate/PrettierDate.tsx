const PrettierDate = (Component: React.ComponentType<{ date: string }>) => {
  return (props: { date: string }) => {
    let date: string;
    const componentDate = new Date(props.date).getTime() / 1000 / 60;
    const now = new Date().getTime() / 1000 / 60;
    const diffTime = now - componentDate;
    if (diffTime < 60) {
      date = `${Math.round(diffTime)} минут назад`;
    } else if (diffTime >= 60 && diffTime / 60 < 24) {
      date = `${Math.round(diffTime / 60)} часов назад`;
    } else {
      date = `${Math.round(diffTime / 60 / 24)} дней назад`;
    }
    return <Component {...props} date={date} />;
  };
};

export default PrettierDate;
