import { useCallback, useState } from "react";

export default function useDailogModal(Component) {
  const [open, setOpen] = useState(false);
  const openDailog = useCallback(() => {
    setOpen(true);
  }, []);

  const DailogComponent = useCallback(
    ({ ...props }) => {
      if (!open) {
        return null;
      }

      if (Component) {
        return (
          <Component open={open} onClose={() => setOpen(false)} {...props} />
        );
      }
    },
    [open, Component]
  );

  return [DailogComponent, openDailog];
}
