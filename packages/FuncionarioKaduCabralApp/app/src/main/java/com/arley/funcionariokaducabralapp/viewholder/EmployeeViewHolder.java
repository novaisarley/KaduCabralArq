package com.arley.funcionariokaducabralapp.viewholder;

import android.view.View;
import android.widget.ImageButton;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.arley.funcionariokaducabralapp.R;

public class EmployeeViewHolder extends RecyclerView.ViewHolder {

    public TextView tvName;
    public TextView tvType;
    public View vType;
    public ImageButton ibDelete;

    public EmployeeViewHolder(@NonNull View itemView) {
        super(itemView);

        vType = (View) itemView.findViewById(R.id.item_employee_view_type);
        tvName = (TextView) itemView.findViewById(R.id.item_employee_tv_name);
        tvType = (TextView) itemView.findViewById(R.id.item_employee_tv_type);
        ibDelete = (ImageButton) itemView.findViewById(R.id.item_employee_ib_delete);
    }
}
