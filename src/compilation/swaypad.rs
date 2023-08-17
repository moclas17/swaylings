use fs_extra::dir::{copy, CopyOptions};
use nanoid::nanoid;
use regex::Regex;
use std::fs::{create_dir, remove_dir_all, File};
use std::io::prelude::*;

const PROJECTS: &str = "projects";

/// Copy the template project to a new project.
pub fn create_project() -> Result<std::string::String, fs_extra::error::Error> {
    // Create a new project id.
    let project_name = nanoid!();

    // Create a new directory for the project.
    create_dir(format!("{PROJECTS}/{project_name}"))?;

    // Setup the copy options for copying the template project to the new dir.
    let options = CopyOptions {
        overwrite: false,
        skip_exist: false,
        buffer_size: 64000,
        copy_inside: false,
        content_only: true,
        depth: 0,
    };

    // Copy the template project over to the new directory.
    copy(
        format!("{PROJECTS}/swaypad"),
        format!("{PROJECTS}/{project_name}"),
        &options,
    )?;

    // Return the project id.
    Ok(project_name)
}

/// Remove a project from the projects dir.
pub fn remove_project(project_name: String) -> std::io::Result<()> {
    remove_dir_all(format!("{PROJECTS}/{project_name}"))?;
    Ok(())
}

/// Write the main sway file to a project.
pub fn write_main_file(project_name: String, contract: &[u8]) -> std::io::Result<()> {
    let mut file = File::create(format!("{PROJECTS}/{project_name}/src/main.sw"))?;
    file.write_all(contract)?;
    Ok(())
}

/// This is a hack and should be made reletive or removed.
pub fn clean_error_content(content: String) -> std::string::String {
    let path_pattern = Regex::new(r"(/).*(/main.sw)").unwrap();

    path_pattern.replace_all(&content, "/main.sw").to_string()
}
